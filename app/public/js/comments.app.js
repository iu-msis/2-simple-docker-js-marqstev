var app = new Vue({
    el: '#commentout',
    data: {
      commentList: [],
      commentForm: {}
    },

    methods: {
      newcommentData() {
        return {
         commentText: ""
        }
      },
      
      handleNewcommentForm( evt ) {
        // evt.preventDefault();  // Redundant w/ Vue's submit.prevent
  
        // TODO: Validate the data!
  
        fetch('api/comments/create.php', {
          method:'POST',
          body: JSON.stringify(this.commentForm),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          // TODO: test a result was returned!
          this.commentList = json;
          this.commentForm = this.newcommentData();
        });
    }
    },
    created() {
      fetch("api/comments/")
      .then( response => response.json() )
      .then( json => {
        this.commentList = json;
  
        console.log(json)}
      );
  
    }

  })