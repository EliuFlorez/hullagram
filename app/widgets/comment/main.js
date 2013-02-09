/*global Hull:true */
Hull.widget('comment', {
  templates: ['main'],
  datasources: {
    likes: ':id/likes'
  },
  beforeRender: function (data) {
    data.comment_id = this.options.id;
  }
});