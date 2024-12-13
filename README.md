# OpenHumanVid
This is the offical Github repository of OpenHumanVid.

**[OpenHumanVid: A Large-Scale High-Quality Dataset for Enhancing Human-Centric Video Generation](https://fudan-generative-vision.github.io/OpenHumanVid/#/)**
</br>
[Hui Li*](https://github.com/crystallee-ai),
[Mingwang Xu*](https://github.com/xumingw),
[Yun Zhan](https://github.com/subazinga),
[Shan Mu](https://github.com/AricGamma),
[Jiaye Li](https://github.com/Studentxll),
[Kaihui Cheng](https://github.com/Kaihui-Cheng),
[Yuxuan Chen](https://github.com/Shr1ke777),
[Tan Chen](https://github.com/tchen0623),
[Mao Ye](#),
[Jingdong Wang](https://jingdongwang2017.github.io/),
[Siyu Zhu](https://sites.google.com/site/zhusiyucs/home),
</br>

[![arXiv](https://img.shields.io/badge/arXiv-2412.00115-b31b1b.svg)](https://arxiv.org/abs/2412.00115)
[![Project Page](https://img.shields.io/badge/Project-Website-green)](https://fudan-generative-vision.github.io/OpenHumanVid/#/)

## Introduction
OpenHumanVid is a large-scale and high-quality human-centric video dataset characterized by precise and detailed captions that encompass both human appearance and motion states, along with supplementary human motion conditions, including skeleton sequences and speech audio.

## Demonstration
### Video-Caption Pairs in Panda-70M
  <table class="center">
    <tr>
      <td width=33.3% style="border: none"><video src="https://cdn.aondata.work/OpenHumanVid/assets/videos/f40492a05b8df569687c735e33c295efce06517630489d06f7f95f68527c4674_010804_010895.mp4"></td>
      <td width=33.3% style="border: none"><video src="https://cdn.aondata.work/OpenHumanVid/assets/videos/4d092de5f215e4bc41b7c773a77787289e0053f2f7645c5801fd2d907ebac137_016564_016789.mp4"></td>
      <td width=33.3% style="border: none"><video src="https://cdn.aondata.work/OpenHumanVid/assets/videos/360e7333d4a8302bacfddd6b308606d17342fa23233a72c545fac4fba812ad59_030894_031095.mp4"></td>
    </tr>
    <tr style="text-align: center;">
      <td width=33.3% style="border: none">A rhino and a lion are fighting in the dirt.</td>
      <td width=33.3% style="border: none">A person is holding a long haired dachshund in their arms.</td>
      <td width=33.3% style="border: none">A rocket launches into space on the launch pad.</td>
    </tr>
  </table>

  <table class="center">
    <tr>
      <td width=33.3% style="border: none"><img src="./assets/AvVDsFBc6bA.0.gif"></td>
      <td width=33.3% style="border: none"><img src="./assets/S-1NdEjjg7c.58.gif"></td>
      <td width=33.3% style="border: none"><img src="./assets/10Y6wIEuG00.62.gif"></td>
    </tr>
    <tr style="text-align: center;">
      <td width=33.3% style="border: none">A person is kneading dough and putting jam on it.</td>
      <td width=33.3% style="border: none">A little boy is playing with a basketball in the city.</td>
      <td width=33.3% style="border: none">A 3d rendering of a zoo with animals and a train.</td>
    </tr>
  </table>

  <table class="center">
    <tr>
      <td width=33.3% style="border: none"><img src="./assets/_uQs-YDb5VA.9.gif"></td>
      <td width=33.3% style="border: none"><img src="./assets/CgcadSRtAag.140.gif"></td>
      <td width=33.3% style="border: none"><img src="./assets/1NMpoAqzJfY.25.gif"></td>
    </tr>
    <tr style="text-align: center;">
      <td width=33.3% style="border: none">A person in blue gloves is connecting an electrical supply to an injector.</td>
      <td width=33.3% style="border: none">There is a beach with waves and rocks in the foreground, and a city skyline in the background.</td>
      <td width=33.3% style="border: none">It is a rally car driving on a dirt road in the countryside, with people watching from the side of the road.</td>
    </tr>
  </table>


## Dataset

### Collection Pipeline
<p align="center" width="100%">
<a target="_blank"><img src="assets/collection_pipeline.gif" style="width: 100%; min-width: 200px; display: block; margin: auto;"></a>
</p>

### Download
  | Split           | Download | # Source Videos | # Samples | Video Duration | Storage Space|
  |-----------------|----------|-----------------|-----------|----------------|--------------|
  | Training (full) | [link](https://drive.google.com/file/d/1pbh8W3qgst9CD7nlPhsH9wmUSWjQlGdW/view?usp=sharing) (2.73 GB) | 3,779,763 | 70,723,513 | 167 khrs  | ~36 TB  |
  | Training (10M)  | [link](https://drive.google.com/file/d/1LLOFeYw9nZzjT5aA1Wj4oGi5yHUzwSk5/view?usp=sharing) (504 MB)  | 3,755,240 | 10,473,922 | 37.0 khrs | ~8.0 TB |
  | Training (2M)   | [link](https://drive.google.com/file/d/1k7NzU6wVNZYl6NxOhLXE7Hz7OrpzNLgB/view?usp=sharing) (118 MB)  | 800,000   | 2,400,000  | 7.56 khrs | ~1.6 TB |
  | Validation      | [link](https://drive.google.com/file/d/1uHR5iXS3Sftzw6AwEhyZ9RefipNzBAzt/view?usp=sharing) (1.2 MB)  | 2,000     | 6,000      | 18.5 hrs  | ~4.0 GB |
  | Testing         | [link](https://drive.google.com/file/d/1BZ9L-157Au1TwmkwlJV8nZQvSRLIiFhq/view?usp=sharing) (1.2 MB)  | 2,000     | 6,000      | 18.5 hrs  | ~4.0 GB |

More details can be found in [Dataset Dataloading](./dataset_dataloading) section.
  

<sup>**We will remove the video samples from our dataset / Github / project webpage / technical presentation as long as you need it. Please contact tsaishienchen at gmail dot com for the request.</sup>

Please check [here](https://snap-research.github.io/Panda-70M/more_samples) for more samples.

### Long Video Splitting and Captioning
https://github.com/snap-research/Panda-70M/assets/3857997/8144cf3d-c20c-4c18-a4bd-011451da9f9b

https://github.com/snap-research/Panda-70M/assets/3857997/b262128e-2152-41e8-873e-db2dc275c40f

## License of Panda-70M
Users must follow [the license](https://github.com/fudan-generative-vision/OpenHumanVid/blob/main/LICENSE) to use these video samples.

## Citation

If you find this project useful for your research, please cite our paper. :blush:

```bibtex
@article{li2024openhumanvid,
  title={OpenHumanVid: A Large-Scale High-Quality Dataset for Enhancing Human-Centric Video Generation},
  author={Li, Hui and Xu, Mingwang and Zhan, Yun and Mu, Shan and Li, Jiaye and Cheng, Kaihui and Chen, Yuxuan and Chen, Tan and Ye, Mao and Wang, Jingdong and others},
  journal={arXiv preprint arXiv:2412.00115},
  year={2024}
}
```

