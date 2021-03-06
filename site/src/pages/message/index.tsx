import React from "react";
import {CodeViewer} from "../../common";
import {Message, Button} from 'redleaf-rc';


const Message1 = ()=>{
  return <Button onClick={()=>{
    Message.show({content: 'message'})
  }}>click me</Button>
};



const Message2 = ()=>{
  return <Button onClick={()=>{
    Message.show({content: 'message with key', key: 'message with key'})
  }}>click me</Button>
};




const Message3 = ()=>{
  return <>
    <Button className="block mb8" onClick={()=>{
      Message.config({duration: 5000})
      Message.show({content: 'display 5s'})
    }}>将message默认显示时间设置为5秒</Button>
    <Button className="block mb8" onClick={()=>{
      Message.show({content: 'display 15s', duration: 15000})
    }}>这个message的显示时间设置为15秒</Button>
  </>
};




const Message4 = ()=>{
  let cnt = 0;
  return <>
    <Button className="block mb8" onClick={()=>{
      const close = Message.show({
        content: (<div className="cursor-pointer" onClick={()=>{close?.()}}>
            <div className="mb8 font16">hand close {cnt++}</div>
            <div>hand close hand close hand close hand close hand close hand close hand close </div>
          </div>),
        onClose: ()=>{
          console.log('关闭回调')
        },
        duration: 0
      })
    }}>手动销毁1</Button>
    <Button className="block mb8" onClick={()=>{
      Message.notify({
        content: <div>
            <div className="mb8 font16">hand close {cnt++}</div>
            <div>hand close hand close hand close hand close hand close hand close hand close </div>
          </div>,
        onClose: ()=>{
          console.log('关闭回调')
        }
      })
    }}>手动销毁2</Button>
  </>
};




const Message5 = ()=>{
  return <>
    <Button className="block mb8" onClick={()=>{
      Message.show({
        content: <div>
            <div className="mb8 font16">default</div>
            <div>message position</div>
          </div>,
      })
    }}>默认</Button>
    <Button className="block mb8" onClick={()=>{
      Message.show({
        content: <div>
            <div className="mb8 font16">topLeft</div>
            <div>message position</div>
          </div>,
        position: 'topLeft'
      })
    }}>左上</Button>
    <Button className="block mb8" onClick={()=>{
      Message.show({
        content: <div>
            <div className="mb8 font16">topRight</div>
            <div>message position</div>
          </div>,
        position: 'topRight'
      })
    }}>右上</Button>
    <Button className="block mb8" onClick={()=>{
      Message.show({
        content: <div>
            <div className="mb8 font16">bottomLeft</div>
            <div>message position</div>
          </div>,
        position: 'bottomLeft'
      })
    }}>左下</Button>
    <Button className="block mb8" onClick={()=>{
      Message.show({
        content: <div>
            <div className="mb8 font16">bottomRight</div>
            <div>message position</div>
          </div>,
        position: 'bottomRight'
      })
    }}>右下</Button>
  </>
};



export default class extends React.Component {
  render(){
    return (<><h2>Message</h2>
<h3 id="基本使用"># 基本使用</h3>
<CodeViewer source={`// <!-- Message1 -->
import {Message, Button} from 'redleaf-rc';

// --
const Message1 = ()=>{
  return <Button onClick={()=>{
    Message.show({content: 'message'})
  }}>click me</Button>
};

// --
ReactDOM.render(
  <Message1 />,
  document.getElementById('root')
);`}><Message1 /></CodeViewer>
<h3 id="避免相同内容的 message 弹出多次"># 避免相同内容的 message 弹出多次</h3>
<CodeViewer source={`// <!-- Message2 -->
import {Message, Button} from 'redleaf-rc';

// --
const Message2 = ()=>{
  return <Button onClick={()=>{
    Message.show({content: 'message with key', key: 'message with key'})
  }}>click me</Button>
};

// --
ReactDOM.render(
  <Message2 />,
  document.getElementById('root')
);`}><Message2 /></CodeViewer>
<h3 id="设置显示时间"># 设置显示时间</h3>
<span className="plain-text-md">单位 ms，不传使用默认时间，传小于等于 0 的数或 NaN 不会自动销毁</span>
<br />
<CodeViewer source={`// <!-- Message3 -->
import {Message, Button} from 'redleaf-rc';

// --

const Message3 = ()=>{
  return <>
    <Button className="block mb8" onClick={()=>{
      Message.config({duration: 5000})
      Message.show({content: 'display 5s'})
    }}>将message默认显示时间设置为5秒</Button>
    <Button className="block mb8" onClick={()=>{
      Message.show({content: 'display 15s', duration: 15000})
    }}>这个message的显示时间设置为15秒</Button>
  </>
};

// --
ReactDOM.render(
  <Message3 />,
  document.getElementById('root')
);`}><Message3 /></CodeViewer>
<h3 id="手动销毁"># 手动销毁</h3>
<span className="plain-text-md">show 函数返回一个 close 函数，调用该函数可销毁 Message</span>
<br />
<span className="plain-text-md">也可以使用 notify，notify 中使用了 show 函数，并增加了关闭按钮</span>
<br />
<span className="plain-text-md">时间传小于等于 0 的数或 NaN 不会自动销毁</span>
<br />
<CodeViewer source={`// <!-- Message4 -->
import {Message, Button} from 'redleaf-rc';

// --

const Message4 = ()=>{
  let cnt = 0;
  return <>
    <Button className="block mb8" onClick={()=>{
      const close = Message.show({
        content: (<div className="cursor-pointer" onClick={()=>{close?.()}}>
            <div className="mb8 font16">hand close {cnt++}</div>
            <div>hand close hand close hand close hand close hand close hand close hand close </div>
          </div>),
        onClose: ()=>{
          console.log('关闭回调')
        },
        duration: 0
      })
    }}>手动销毁1</Button>
    <Button className="block mb8" onClick={()=>{
      Message.notify({
        content: <div>
            <div className="mb8 font16">hand close {cnt++}</div>
            <div>hand close hand close hand close hand close hand close hand close hand close </div>
          </div>,
        onClose: ()=>{
          console.log('关闭回调')
        }
      })
    }}>手动销毁2</Button>
  </>
};

// --
ReactDOM.render(
  <Message4 />,
  document.getElementById('root')
);`}><Message4 /></CodeViewer>
<h3 id="位置"># 位置</h3>
<CodeViewer source={`// <!-- Message5 -->
import {Message, Button} from 'redleaf-rc';

// --

const Message5 = ()=>{
  return <>
    <Button className="block mb8" onClick={()=>{
      Message.show({
        content: <div>
            <div className="mb8 font16">default</div>
            <div>message position</div>
          </div>,
      })
    }}>默认</Button>
    <Button className="block mb8" onClick={()=>{
      Message.show({
        content: <div>
            <div className="mb8 font16">topLeft</div>
            <div>message position</div>
          </div>,
        position: 'topLeft'
      })
    }}>左上</Button>
    <Button className="block mb8" onClick={()=>{
      Message.show({
        content: <div>
            <div className="mb8 font16">topRight</div>
            <div>message position</div>
          </div>,
        position: 'topRight'
      })
    }}>右上</Button>
    <Button className="block mb8" onClick={()=>{
      Message.show({
        content: <div>
            <div className="mb8 font16">bottomLeft</div>
            <div>message position</div>
          </div>,
        position: 'bottomLeft'
      })
    }}>左下</Button>
    <Button className="block mb8" onClick={()=>{
      Message.show({
        content: <div>
            <div className="mb8 font16">bottomRight</div>
            <div>message position</div>
          </div>,
        position: 'bottomRight'
      })
    }}>右下</Button>
  </>
};

// --
ReactDOM.render(
  <Message5 />,
  document.getElementById('root')
);`}><Message5 /></CodeViewer>
<h3 id="Message 函数"># Message 函数</h3>
<table className="table">
<thead>
<tr><th>函数</th>
<th>说明</th></tr>
</thead>
<tbody><tr><td>show</td>
<td>显示 Message，参数见下文，返回一个 close 函数，可用于销毁 Message</td></tr>
<tr><td>notify</td>
<td>使用了 show，并添加了关闭按钮，传入 duration 参数无效，notify 使用 show 函数时传入的 duration 为 0</td></tr>
<tr><td>config</td>
<td>用于设置 Message 展示的默认时间，参数 duration</td></tr></tbody>
</table>
<h3 id="show 函数的参数"># show 函数的参数</h3>
<table className="table">
<thead>
<tr><th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
<th>必填</th></tr>
</thead>
<tbody><tr><td>className</td>
<td>内容部分的类名</td>
<td>string</td>
<td>无</td>
<td>否</td></tr>
<tr><td>content</td>
<td>消息内容</td>
<td>ReactNode</td>
<td>无</td>
<td>是</td></tr>
<tr><td>duration</td>
<td>消息展示的时间，单位 ms，不传使用默认时间，传一个小于等于 0 的数或 NaN 不自动销毁</td>
<td>number</td>
<td>2000</td>
<td>否</td></tr>
<tr><td>key</td>
<td>用于保证同内容的 Message 只弹出一次</td>
<td>string</td>
<td>无</td>
<td>否</td></tr>
<tr><td>position</td>
<td>Message 展示位置，不填默认在视口中上部展示</td>
<td>"topLeft" | "topRight" | "bottomLeft" | "bottomRight"</td>
<td>无</td>
<td>否</td></tr></tbody>
</table>
<h3 id="css 变量"># css 变量</h3>
<table className="table">
<thead>
<tr><th>变量</th>
<th>说明</th></tr>
</thead>
<tbody><tr><td>--message-color</td>
<td>消息内容文本颜色</td></tr>
<tr><td>--message-bgColor</td>
<td>消息内容背景色</td></tr>
<tr><td>--message-box-shadow</td>
<td>消息边框阴影颜色</td></tr>
<tr><td>--message-z-index</td>
<td>消息 z-index</td></tr>
<tr><td>--message-content-padding</td>
<td>消息内容的 padding</td></tr></tbody>
</table>
<h3 id="特别说明"># 特别说明</h3>
<span className="plain-text-md">Message 的每种位置有一个容器，容器是 fixed 定位，z-index 值为 9999</span>
<div className="right-nav-contain"><a className="right-nav" href="#基本使用">基本使用</a>
<a className="right-nav" href="#避免相同内容的 message 弹出多次">避免相同内容的 message 弹出多次</a>
<a className="right-nav" href="#设置显示时间">设置显示时间</a>
<a className="right-nav" href="#手动销毁">手动销毁</a>
<a className="right-nav" href="#位置">位置</a>
<a className="right-nav" href="#Message 函数">Message 函数</a>
<a className="right-nav" href="#show 函数的参数">show 函数的参数</a>
<a className="right-nav" href="#css 变量">css 变量</a>
<a className="right-nav" href="#特别说明">特别说明</a></div></>)
  }
}