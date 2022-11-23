import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "reading",
      imageUrl: 
      "https://i.imgur.com/1650Sp5.jpg",
    },
    {
      id: 2, 
      title: "math",
      imageUrl:
        "https://i.imgur.com/cndv8af.jpg",
    },
    {
      id: 3,
      title: "science",
      imageUrl:
        "https://i.imgur.com/FOEblZJ.jpg",
    },
    {
      id: 4,
      title: "history",
      imageUrl:
        "https://i.imgur.com/YJqbGSs.jpg",
    },
    {
      id: 5,
      title: "writing",
      imageUrl:
        "https://i.imgur.com/uNKAFSa.jpg",
    },
    {
      id: 6,
      title: "holidays",
      imageUrl:
        "https://i.imgur.com/zWaGUb9.jpg",
    },
    {
      id: 7,
      title: "firstdaysofschool",
      imageUrl:
        "https://i.imgur.com/UrZnC2p.jpg",
    },
    {
      id: 8,
      title: "worldlanguages",
      imageUrl:
        "https://i.imgur.com/EJKmR2R.jpg",
    },
    {
      id: 9,
      title: "art",
      imageUrl:
        "https://i.imgur.com/gObdULX.jpg",
    },
  ];

  return <Directory categories={categories} />;
};

export default Home;
