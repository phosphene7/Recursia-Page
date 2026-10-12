// 页面配置：添加作者、代码仓库和视频时，只需修改这里。
window.RECURSIA_CONFIG = {
  authors: [], // 例如 [{ name: "Your Name", url: "https://your-homepage.com" }]
  codeUrl: "https://github.com/cyzhuoda/recursia-fr3", // 论文实现代码仓库。
  videos: {
    task1: { src: "T1.mp4", poster: "T1.jpg", captions: "" },
    task2: { src: "T2.mp4", poster: "T2.jpg", captions: "" },
    task3: { src: "T3.mp4", poster: "T3.jpg", captions: "" },
    source1: { src: "S1.mp4", poster: "S1.jpg", captions: "", preload: "none" },
    source2: { src: "S2.mp4", poster: "S2.jpg", captions: "", preload: "none" },
    source3: { src: "S3.mp4", poster: "S3.jpg", captions: "", preload: "none" },
    source4: { src: "S4.mp4", poster: "S4.jpg", captions: "", preload: "none" },
    source5: { src: "S5.mp4", poster: "S5.jpg", captions: "", preload: "none" },
    source6: { src: "S6.mp4", poster: "S6.jpg", captions: "", preload: "none" }
  }
};
// T1–T3 为目标任务视频，S1–S6 为源任务视频；替换同名 MP4 即可更新。
// captions 可选，填写英文 WebVTT 字幕文件路径；视频也支持 HTTPS 直链。
