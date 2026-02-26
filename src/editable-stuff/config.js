/*
  站点的中心化内容配置文件。
  用法：
  - 每个区块的 "show" 控制是否渲染。
  - 文案、图片、链接等配置会通过 props 传给组件。
  - 想改首页内容，优先改这里，不必先改组件逻辑。
*/

// 导航栏区块
const navBar = {
  // 控制顶部导航是否显示。
  show: true,
};

// 首屏主区块
const mainBody = {
  // 首屏背景渐变色（用于动画背景）。
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Su",
  middleName: "",
  lastName: "Zhang",
  message: " Hello World!!! ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/suzhanghu",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/suzhangdev/",
    },
  ],
};

// About 区块
// About 头像支持以下来源：
// a) Instagram 用户名，例如：profilePictureLink: "johnDoe123"
// b) 外链图片 URL，例如：profilePictureLink: "www.picturesonline.com/avatar.jpg"
// c) editable-stuff 目录内图片并通过 require 导入
//    例如：profilePictureLink: require("../editable-stuff/hashirshoaeb.png")
// d) 不显示头像则留空字符串
// Resume 支持外链或本地导入：
//    例如：resume: require("../editable-stuff/resume.pdf")
//    或：resume: "https://docs.google.com/..."

const about = {
  // 为 false 时不渲染 About 区块。
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Su Zhang.jpeg"),
  imageSize: 375,
  message:
    "My name is Su Zhang. I graduated from the University of Ottawa in Computer Science.currently in my final semester of the Enterprise Software Development at Humber.",
  resume: "",
};

// 项目区块
// reposLength 会自动拉取最近更新的 N 个仓库；设为 0 可不展示自动仓库。
// specificRepos 可额外指定仓库名数组，例如：["repository-1", "repo-2"]
const repos = {
  // 为 false 时隐藏项目区块，并且不会请求 GitHub 数据。
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "suzhanghu", 
  reposLength: 2,
  specificRepos: [],
};

// Leadership 区块
const leadership = {
  // 可选轮播区块（默认关闭）。
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/Su Zhang.jpeg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/Su Zhang.jpeg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// 技能区块
const skills = {
  // 技能区块开关。
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Nodejs", value: 85 },
    { name: "PHP", value: 65 },
    { name: "Wordpress", value: 65 },
    { name: "CSS", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML", value: 65 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// 联系区块
const getInTouch = {
  // 页脚联系区块开关。
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "zleviz001@gmail.com",
};

const experiences = {
  // 经验区块开关。
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog 区块
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
