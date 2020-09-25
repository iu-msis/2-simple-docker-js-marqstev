var app = new Vue({
  el: '#userProfile',
  data: { 
    userName:'',
    userEmail:'',
    userFirst:'',
    userLast:'',
    userDOB:'',
    userAge:'',
    userCountry:'',
    userImgLarge:'',
    userImgThumb:''
  
    
  },
  created() {
  this.fetchUser();
  },

methods: {
  
  fetchUser: function() {
   

    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      var userData = data.results[0];
      console.log(userData);
      this.userName = userData.name.first + " "+userData.name.last;
      this.userEmail = userData.email;
      this.userAge = userData.dob.age; 
      this.userCountry = userData.location.country;
      this.userDOB = userData.dob.date[1] + "/" + userData.dob.date[2] + "/" + userData.dob.date[0] + userData.dob.date[1] + userData.dob.date[2] + userData.dob.date[3] ;
      this.userImgLarge = userData.picture.large;
      this.userImgThumb = userData.picture.thumbnail;
     
    });
  }
}
})

