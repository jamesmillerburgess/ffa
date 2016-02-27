if (Jobs.find().count() === 0) {
  Jobs.insert({title: "India to United Kingdom"});
  Jobs.insert({title: "China to Germany"});
  Jobs.insert({title: "Germany to United States"});
  Jobs.insert({title: "Singapore to Malaysia"});
}