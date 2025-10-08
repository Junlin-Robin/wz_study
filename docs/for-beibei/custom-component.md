---
nav:
  title: 被学 💎
  order: 2
group: 基础教程
title: 自定义组件使用说明
order: 2
---

# 自定义组件 <Badge>内置组件</Badge>

:::info{title="说明 💡"}
根据使用中具体需求，开发者 [Robin](https://github.com/Junlin-Robin) 会开发对应的内部使用自定义组件供文档编写者使用；这些自组件存放在 `src/components` 文件夹下面。

该文档针对提供的内置组件用法进行说明，请参考案例进行编写，以便实现最好的展示效果。
:::

## mermaid 大图查看

### 效果展示

```tsx
import FullScreenMermaid from '@/components/full-screen-mermaid'

const mermaid = `
erDiagram
    CAR ||--o{ NAMED-DRIVER : allows
    CAR {
        string registrationNumber PK
        string make
        string model
        string[] parts
    }
    PERSON ||--o{ NAMED-DRIVER : is
    PERSON {
        string driversLicense PK "The license #"
        string(99) firstName "Only 99 characters are allowed"
        string lastName
        string phone UK
        int age
    }
    NAMED-DRIVER {
        string carRegistrationNumber PK, FK
        string driverLicence PK, FK
    }
    MANUFACTURER only one to zero or more CAR : makes
`

export default () => <FullScreenMermaid mermaid={mermaid} />
```

### 书写规则

基础语法兼容 **mermaid** 所有图表语法。

如果在 **markdown** 文档中使用，需要包含在 <span style="background-color: #f0f4f8; color: #d56161; padding: 2px 5px; border-radius: 2px">\`\`\`tsx</span> 的代码块中。代码块参考示例，其中仅需要修改 **mermiad语法** 即可，其余为固定写法，请直接粘贴复制。如果仅想嵌入页面展示，还需要在顶部增加 ```inline: true``` 的配置项。

- 直接嵌入页面展示

```tsx | pure
/**
 * inline: true
 */

import FullScreenMermaid from '@/components/full-screen-mermaid'

const mermaid = `
 This is place to write mermaid code...
`

export default () => <FullScreenMermaid mermaid={mermaid} />
```

- 有组件展示框（不加 `inline` 配置项）

```tsx | pure
import FullScreenMermaid from '@/components/full-screen-mermaid'

const mermaid = `
 This is place to write mermaid code...
`

export default () => <FullScreenMermaid mermaid={mermaid} />
```
