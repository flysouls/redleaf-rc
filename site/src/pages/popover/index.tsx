import React from "react";
import {CodeViewer} from "../../common";
import {useState} from 'react';
import {Popover, Button, Bubble} from 'redleaf-rc';


const Popover1 = ()=>{
  document.body.style.setProperty('--bubble-bgColor', 'orange');
  return <>
    <Popover
      className="mr8"
      trigger="hover"
      topOffset="-8"
      content={<Bubble>121323123</Bubble>}>
      <Button>Hover me</Button>
    </Popover>
    <Popover
      trigger="click"
      topOffset={-8}
      content={<Bubble>121323123</Bubble>}>
      <Button>Click me</Button>
    </Popover>
  </>
};



const Popover2 = ()=>{
  const [show, setShow] = useState(false)
  return <>
    <div className="mb8">
      <Popover
        trigger="hover"
        topOffset="-8"
        visible={show}
        content={<Bubble>121323123</Bubble>}>
        <Button>under control</Button>
      </Popover>
    </div>
    <Button className="mr8" onClick={()=>setShow(true)}>show</Button>
    <Button onClick={()=>setShow(false)}>hide</Button>
  </>
};



const Popover3 = ()=>{
  return <>
    <div className="mb16">
      <Popover
        className="mr16"
        position="topCenter"
        content={<div className="border-1px-black bg-white">121323123</div>}>
        <Button>topCenter</Button>
      </Popover>
      <Popover
        className="mr16"
        position="bottomCenter"
        content={<div className="border-1px-black bg-white">121323123</div>}>
        <Button>bottomCenter</Button>
      </Popover>
      <Popover
        className="mr16"
        position="leftCenter"
        content={<div className="border-1px-black bg-white">121323123</div>}>
        <Button>leftCenter</Button>
      </Popover>
      <Popover
        className="mr16"
        position="rightCenter"
        content={<div className="border-1px-black bg-white">121323123</div>}>
        <Button>rightCenter</Button>
      </Popover>
    </div>

    <div className="mb16">
      <Popover
        className="mr16"
        position="topLeft"
        content={<div className="border-1px-black bg-white">121323123</div>}>
        <Button>topLeft</Button>
      </Popover>
      <Popover
        className="mr16"
        position="topRight"
        content={<div className="border-1px-black bg-white">121323123</div>}>
        <Button>topRight</Button>
      </Popover>
      <Popover
        className="mr16"
        position="bottomLeft"
        content={<div className="border-1px-black bg-white">121323123</div>}>
        <Button>bottomLeft</Button>
      </Popover>
      <Popover
        className="mr16"
        position="bottomRight"
        content={<div className="border-1px-black bg-white">121323123</div>}>
        <Button>bottomRight</Button>
      </Popover>
    </div>

    <div className="mb16">
      <Popover
        className="mr16"
        position="leftTop"
        content={<div className="border-1px-black bg-white">121323123</div>}>
        <Button>leftTop</Button>
      </Popover>
      <Popover
        className="mr16"
        position="leftBottom"
        content={<div className="border-1px-black bg-white">121323123</div>}>
        <Button>leftBottom</Button>
      </Popover>
      <Popover
        className="mr16"
        position="rightTop"
        content={<div className="border-1px-black bg-white">121323123</div>}>
        <Button>rightTop</Button>
      </Popover>
      <Popover
        className="mr16"
        position="rightBottom"
        content={<div className="border-1px-black bg-white">121323123</div>}>
        <Button>rightBottom</Button>
      </Popover>
    </div>
  </>
};



export default class extends React.Component {
  render(){
    return (<><h2>Popover</h2>
<span className="plain-text-md">使用了 position 进行定位，没有使用创建元素的形式，对原本的 DOM 结构有侵入，定位需要自己调整，不过也因此不需要元素位置的计算</span>
<br />
<h3 id="基本使用"># 基本使用</h3>
<span className="plain-text-md">例子中对 content 使用了 Bubble 组件，也可以不用 Bubble 组件包裹，自定义 content 展示样式</span>
<br />
<CodeViewer source={`// <!-- Popover1 -->
import {Popover, Button, Bubble} from 'redleaf-rc';

// --
const Popover1 = ()=>{
  document.body.style.setProperty('--bubble-bgColor', 'orange');
  return <>
    <Popover
      className="mr8"
      trigger="hover"
      topOffset="-8"
      content={<Bubble>121323123</Bubble>}>
      <Button>Hover me</Button>
    </Popover>
    <Popover
      trigger="click"
      topOffset={-8}
      content={<Bubble>121323123</Bubble>}>
      <Button>Click me</Button>
    </Popover>
  </>
};

// --
ReactDOM.render(
  <Popover1 />,
  document.getElementById('root')
);`}><Popover1 /></CodeViewer>
<h3 id="手动控制 content 显示隐藏"># 手动控制 content 显示隐藏</h3>
<CodeViewer source={`// <!-- Popover2 -->
import {Popover, Button, Bubble} from 'redleaf-rc';

// --
const Popover2 = ()=>{
  const [show, setShow] = useState(false)
  return <>
    <div className="mb8">
      <Popover
        trigger="hover"
        topOffset="-8"
        visible={show}
        content={<Bubble>121323123</Bubble>}>
        <Button>under control</Button>
      </Popover>
    </div>
    <Button className="mr8" onClick={()=>setShow(true)}>show</Button>
    <Button onClick={()=>setShow(false)}>hide</Button>
  </>
};

// --
ReactDOM.render(
  <Popover2 />,
  document.getElementById('root')
);`}><Popover2 /></CodeViewer>
<h3 id="十二种位置"># 十二种位置</h3>
<span className="plain-text-md">取值和 Bubble 组件一致</span>
<br />
<span className="plain-text-md">这里没有再用 Bubble 组件展示，为了防止 Bubble 的箭头影响判断，这里的位置指的是 Popover 包裹的子组件为基准，content 向基准对齐</span>
<br />
<CodeViewer source={`// <!-- Popover3 -->
import {Popover, Button} from 'redleaf-rc';

// --
const Popover3 = ()=>{
  return <>
    <div className="mb16">
      <Popover
        className="mr16"
        position="topCenter"
        content={<div className="border-1px-black bg-white">121323123</div>}>
        <Button>topCenter</Button>
      </Popover>
      <Popover
        className="mr16"
        position="bottomCenter"
        content={<div className="border-1px-black bg-white">121323123</div>}>
        <Button>bottomCenter</Button>
      </Popover>
      <Popover
        className="mr16"
        position="leftCenter"
        content={<div className="border-1px-black bg-white">121323123</div>}>
        <Button>leftCenter</Button>
      </Popover>
      <Popover
        className="mr16"
        position="rightCenter"
        content={<div className="border-1px-black bg-white">121323123</div>}>
        <Button>rightCenter</Button>
      </Popover>
    </div>

    <div className="mb16">
      <Popover
        className="mr16"
        position="topLeft"
        content={<div className="border-1px-black bg-white">121323123</div>}>
        <Button>topLeft</Button>
      </Popover>
      <Popover
        className="mr16"
        position="topRight"
        content={<div className="border-1px-black bg-white">121323123</div>}>
        <Button>topRight</Button>
      </Popover>
      <Popover
        className="mr16"
        position="bottomLeft"
        content={<div className="border-1px-black bg-white">121323123</div>}>
        <Button>bottomLeft</Button>
      </Popover>
      <Popover
        className="mr16"
        position="bottomRight"
        content={<div className="border-1px-black bg-white">121323123</div>}>
        <Button>bottomRight</Button>
      </Popover>
    </div>

    <div className="mb16">
      <Popover
        className="mr16"
        position="leftTop"
        content={<div className="border-1px-black bg-white">121323123</div>}>
        <Button>leftTop</Button>
      </Popover>
      <Popover
        className="mr16"
        position="leftBottom"
        content={<div className="border-1px-black bg-white">121323123</div>}>
        <Button>leftBottom</Button>
      </Popover>
      <Popover
        className="mr16"
        position="rightTop"
        content={<div className="border-1px-black bg-white">121323123</div>}>
        <Button>rightTop</Button>
      </Popover>
      <Popover
        className="mr16"
        position="rightBottom"
        content={<div className="border-1px-black bg-white">121323123</div>}>
        <Button>rightBottom</Button>
      </Popover>
    </div>
  </>
};

// --
ReactDOM.render(
  <Popover3 />,
  document.getElementById('root')
);`}><Popover3 /></CodeViewer>
<h3 id="Popover"># Popover</h3>
<table className="table">
<thead>
<tr><th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
<th>必填</th></tr>
</thead>
<tbody><tr><td>contentClassName</td>
<td>popover 包裹子组件的容器的类名</td>
<td>string</td>
<td>无</td>
<td>否</td></tr>
<tr><td>className</td>
<td>popover 外层容器类名</td>
<td>string</td>
<td>无</td>
<td>否</td></tr>
<tr><td>trigger</td>
<td>触发类型</td>
<td>"hover" | "click"</td>
<td>"hover"</td>
<td>否</td></tr>
<tr><td>onHide</td>
<td>content 隐藏时的回调</td>
<td>function(): void</td>
<td>无</td>
<td>否</td></tr>
<tr><td>onVisible</td>
<td>content 显示时的回调</td>
<td>function(): void</td>
<td>无</td>
<td>否</td></tr>
<tr><td>children</td>
<td>popover 包裹的子组件</td>
<td>ReactNode</td>
<td>无</td>
<td>是</td></tr>
<tr><td>content</td>
<td>popover 显示的内容</td>
<td>ReactNode</td>
<td>无</td>
<td>是</td></tr>
<tr><td>position</td>
<td>content 显示位置</td>
<td>"topCenter" |<br/> "leftCenter" |<br/> "rightCenter" |<br/> "bottomCenter" |<br/> "topLeft" |<br/> "topRight" |<br/> "bottomLeft" |<br/> "bottomRight" |<br/> "leftTop" |<br/> "leftBottom" |<br/> "rightTop" |<br/> "rightBottom"</td>
<td>"topCenter"</td>
<td>否</td></tr>
<tr><td>visible</td>
<td>控制 content 是否展示</td>
<td>boolean</td>
<td>无</td>
<td>否</td></tr>
<tr><td>leftOffset</td>
<td>content 的横向偏移，负数表示向左偏移，正数表示向右偏移</td>
<td>string | number</td>
<td>'0px'</td>
<td>否</td></tr>
<tr><td>topOffset</td>
<td>content 的纵向偏移，负数表示向上偏移，正数表示向下偏移</td>
<td>string | number</td>
<td>'0px'</td>
<td>否</td></tr></tbody>
</table>
<h3 id="css 变量"># css 变量</h3>
<table className="table">
<thead>
<tr><th>变量</th>
<th>说明</th></tr>
</thead>
<tbody><tr><td>--popover-z-index</td>
<td>content 的 z-index</td></tr></tbody>
</table>
<div className="right-nav-contain"><a className="right-nav" href="#基本使用">基本使用</a>
<a className="right-nav" href="#手动控制 content 显示隐藏">手动控制 content 显示隐藏</a>
<a className="right-nav" href="#十二种位置">十二种位置</a>
<a className="right-nav" href="#Popover">Popover</a>
<a className="right-nav" href="#css 变量">css 变量</a></div></>)
  }
}