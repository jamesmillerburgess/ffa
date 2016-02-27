Template.jobList.helpers({
  jobs: function() {
    return Jobs.find();
  }
});
