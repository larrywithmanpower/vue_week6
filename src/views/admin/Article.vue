<template>
    <div>
    <Loading :active="isLoading"></Loading>
    <button
    type="button"
    class="btn btn-primary my-3"
    @click="openModal('new')"
    >
    新增文章
    </button>
    <div class="table-responsive">
      <table class="table align-middle text-center">
        <thead>
          <tr>
            <th width="20%">標題</th>
            <th width="25%">簡介</th>
            <th width="10%">作者</th>
            <th width="15%">日期</th>
            <th width="10%">是否公開</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="article in articles" :key="article.id">
            <td>{{ article.title }}</td>
            <td>{{ article.description }}</td>
            <td>{{ article.author }}</td>
            <td>{{ new Date(article.create_at * 1000).toLocaleDateString() }}</td>
            <td>
              <span :class="{ 'text-success': article.isPublic }"
              v-if="article.isPublic">發布</span>
              <span :class="{ 'text-danger': !article.isPublic }"
              v-if="!article.isPublic">未發布</span>
            </td>
            <td>
              <div class="btn-group">
                <button type="button"
                class="btn btn-sm btn-outline-primary"
                @click="openModal('edit', article)"
                >編輯</button>
                <button type="button"
                class="btn btn-sm btn-outline-danger"
                @click="openModal('delete', article)"
                >刪除</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <articleModal
  id="articleModal"
  ref="articleModal"
  :is-new="isNew"
  :article="tempArticle"
  @update-article="updateArticle"
  ></articleModal>

  <del-modal
  id="delModal"
  ref="delModal"
  :item="tempArticle"
  @delete="deleteArticle"></del-modal>
</template>

<script>
import articleModal from '@/components/ArticleModal.vue';
import delModal from '@/components/DelModal.vue';

export default {
  data() {
    return {
      isLoading: false,
      articles: [],
      isNew: false,
      tempArticle: {
        tag: [],
        imagesUrl: [],
      },
    };
  },
  inject: ['emitter'],
  components: {
    articleModal,
    delModal,
  },
  created() {
    this.getArticles();
  },
  methods: {
    getArticles(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/articles?page=${page}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          console.log(res);
          this.articles = res.data.articles;
          this.isLoading = false;
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.messages.join(','));
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    openModal(isNew, article) {
      switch (isNew) {
        case 'new':
          this.isNew = true;
          this.tempArticle = {
            create_at: Math.floor(Date.now() / 1000),
            isPublic: false,
            tag: [],
            imagesUrl: [],
          };
          this.$refs.articleModal.showModal();
          break;
        case 'edit':
          this.isNew = false;
          console.log(article);
          this.tempArticle = {
            ...article,
            content: '新品文章',
          };
          this.$refs.articleModal.showModal();
          break;
        case 'delete':
          this.tempArticle = { ...article };
          this.$refs.delModal.showModal();
          break;
        default:
          break;
      }
    },
    updateArticle(tempArticle) {
      // ! 新增
      if (this.isNew === true) {
        const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article`;
        this.$http.post(url, { data: tempArticle }).then((res) => {
          if (res.data.success) {
            this.getArticles();
            this.emitter.emit('push-message', {
              style: 'success',
              title: res.data.message,
            });
            this.$refs.articleModal.closeModal();
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '新增失敗',
              content: res.data.message.join('、'),
            });
          }
        }).catch((err) => {
          console.log(err);
        });
      } else {
        // ! 編輯
        const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article/${tempArticle.id}`;
        this.$http.put(url, { data: tempArticle }).then((res) => {
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'success',
              title: `${res.data.message}`,
            });
            this.getArticles();
            this.$refs.articleModal.closeModal();
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: `${tempArticle.title}更新失敗`,
              content: res.data.message.join('、'),
            });
          }
        }).catch((err) => {
          console.log(err);
        });
      }
    },
    deleteArticle(tempArticle) {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article/${tempArticle.id}`;
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          this.emitter.emit('push-message', {
            style: 'success',
            title: res.data.message,
          });
          this.getArticles();
          this.$refs.delModal.closeModal();
        } else {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: res.data.message,
          });
        }
      });
    },
  },
};
</script>
