```import
import {ConfigProvider, Pagination} from 'redleaf-rc';
```

## ConfigProvider

### 切换组件内置文本

lang 属性可以指定内置的中文和英文文本，langText 属性可以对单独的属性进行覆盖，采用的是 Object.assign 形式覆盖，具体可使用的 langText 在每个组件中有单独说明

```component
import {ConfigProvider} from 'redleaf-rc';

// --
// <!-- Comp1 -->
const Comp1 = ()=>{
  return <>
    英文：
    <ConfigProvider.Provider lang="en-US">
      <Pagination className="block mb8" totalItems={28} />
    </ConfigProvider.Provider>
    中文：
    <ConfigProvider.Provider lang="zh-CN">
      <Pagination className="block mb8" totalItems={28} />
    </ConfigProvider.Provider>
    通过langText设置了前一页的文本为{"<"}：
    <ConfigProvider.Provider lang="zh-CN" langText={{prevPage: "<"}}>
      <Pagination className="block mb8" totalItems={28} />
    </ConfigProvider.Provider>
  </>
};

// --
ReactDOM.render(
  <Comp1 />,
  document.getElementById('root')
);
```

### 作为 context 使用

```component
import {ConfigProvider} from 'redleaf-rc';

// --
// <!-- Comp2 -->
const GrandChildComp2 = () => {
  return <ConfigProvider.Consumer>
    {(val: any) => {
      return <div style={{color: val.color}}>
        <p>name: {val.obj.name}</p>
        <p>age: {val.obj.age}</p>
      </div>
    }}
  </ConfigProvider.Consumer>
};

const ChildComp2 = () => <GrandChildComp2 />;

const Comp2 = ()=>{
  // Provider中提供的props都会往下传递到Consumer包裹的内容中
  return <>
  <ConfigProvider.Provider color="red" obj={{name: 'aa', age: 11}}>
    <ChildComp2 />
  </ConfigProvider.Provider>
  <ConfigProvider.Provider color="yellow" obj={{name: 'bb', age: 22}}>
    <ChildComp2 />
  </ConfigProvider.Provider>
  </>
};

// --
ReactDOM.render(
  <Comp2 />,
  document.getElementById('root')
);
```
