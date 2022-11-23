// dummy data

// const infos = [
//   {
//     title: "Title 1",
//     Desc: "Desc 1",
//   },
//   {
//     title: "Title 2",
//     Desc: "Desc 2",
//   },
//   {
//     title: "Title 3",
//     Desc: "Desc 3",
//   },
//   {
//     title: "Title 4",
//     Desc: "Desc 4",
//   },
//   {
//     title: "Title 5",
//     Desc: "Desc 5",
//   },
//   {
//     title: "Title 6",
//     Desc: "Desc 6",
//   },
//   {
//     title: "Title 7",
//     Desc: "Desc 7",
//   },
//   {
//     title: "Title 8",
//     Desc: "Desc 8",
//   },
// ];

{
  /* <div class="info">
        <h3 class="info-title">Title1</h3>
        <p class="info-desc">Desc1</p>
      </div> */
}

// fetch data

// console.log(axios);

const dataFetch = async (config) => {
  try {
    const res = await axios(config);
    return res.data;
    //   console.log(res.data);
  } catch (err) {
    throw Error("Data isn't fetched");
  }
};

// select

const infosContent = document.querySelector(".infos");

const loadAll = async () => {
  const infos = await dataFetch("https://jsonplaceholder.typicode.com/posts");
  infos.map((info) => {
    // console.log(info);
    const infoContent = document.createElement("div");
    infoContent.classList.add("info");
    infoContent.innerHTML = `
    <h3 class="info-title">${info.title}</h3>
    <p class="info-body">${info.body}</p>
    `;
    infosContent.appendChild(infoContent);
  });
};
loadAll();
