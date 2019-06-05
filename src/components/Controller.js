import $ from 'jquery'

import ImgLeft from '../assets/left.png'
import ImgRight from '../assets/right.png'
import ImgDown from '../assets/down.png'
import ImgChanger from '../assets/changer.png'

export default class Controller {

  constructor() {
    this._render()
  }

  _render() {
    let template = `
    <div id="controller-left" class="controller controller-left"></div>
    <div id="controller-right" class="controller controller-right"></div>
    <div id="controller-down" class="controller controller-down"></div>
    <div id="controller-changer" class="controller controller-changer"></div>
    `
    $('#app').append(template)

    // 设置内部图片，模块化管理
    let imgLeft = new Image()
    imgLeft.src = ImgLeft
    $('#controller-left').append(imgLeft)

    let imgRight = new Image()
    imgRight.src = ImgRight
    $('#controller-right').append(imgRight)

    let imgDown = new Image()
    imgDown.src = ImgDown
    $('#controller-down').append(imgDown)

    let imgChanger = new Image()
    imgChanger.src = ImgChanger
    $('#controller-changer').append(imgChanger)

  }
}