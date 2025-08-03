---
nav:
    title: 项目 🏭
    order: 3
title: 立项 KickOff
order: 1
group:
    title: 🤖️ Connor
    order: 1
---

## 🤖️ Connor <Badge>终结者</Badge> <Badge type="warning">0.0.1</Badge> <Badge type="success">立项/KickOff</Badge>

:::info{title="什么是 CONNOR？"}
**Connor**，中文名：**终结者**。

取名寓意来自电影《**Terminator**》，电影中人工智能天网要消灭全人类，而女主 **莎拉・康纳**（**Sarah Connor**）是未来反抗军领袖 **约翰・康纳** 的母亲，因此她成为了终结者追杀的关键目标。如果 **莎拉・康纳** 被消灭，**约翰・康纳** 就不会出生，人类反抗军也就失去了最重要的领袖。

因此对于 **Connor** 来说，时间的每一份每一秒都很宝贵。本项目也希望借助 **APP** 帮助我们更加高效利用时间，最终逃出 **终结者** 的追捕，实现命运的逆转！
:::

### 1. 产品架构

本产品的终极目的是帮助用户更加高效 <span style="font-weight: 600; color: orange">制定计划、管理目标、掌控时间</span>，在综合考察目前市场已有的竞品（`Vis`, `目标地图`）等，发现普遍存在共性的使用痛点，列举如下。

| 产品 | 平台 | 版本 | <span style="display: inline-block; width: 130px">设计</span> | <span style="display: inline-block; width: 260px">痛点</span> |
| :--: | :--: | :--: | :--: | :-- |
| <span style="white-space: nowrap">**Vis**</span> | <span style="white-space: nowrap">app / ios</span> | <span style="white-space: nowrap">4.1.4</span> | `目标节点`-`目标`-`关键结果` | 1. 目标、里程碑、任务 维度数据组织不合理 <br/> 2. 量化任务进度逻辑复杂，使用体感上过于抽象 <br /> 3. 没有用户操作介入和及时通知，平时基本无感 <br /> 4. 不符合日常使用中需要临时推迟某一任务的使用需求 |
| <span style="white-space: nowrap">**目标地图**</span> | <span style="white-space: nowrap">app / ios</span> | <span style="white-space: nowrap">3.12.2</span> | `制定目标`-`拆解`-`执行`-`复盘` | 1. 基本同上 <br /> 2. 复盘功能鸡肋，更应该改成多维度的报告呈现给用户 <br /> 3. 统计展示维度过于简单，没有对于计划的深入分析数据展示 <br /> |

根据以上的 **APP** 调研分析，目前产品形态上设计通病在于 **形而上思想**，没有触及需要使用产品用户的真实诉求（`更直观`、`更简单`、`更智能`、`更人性`），大量的用户痛点视而不见；需要在产品内部实现的逻辑下放给用户（`个人复盘`、`进度计算逻辑`、 `整体规划` 等），在使用整体体验上就会存在 <span style="color: #EC2824; font-weight: 600">难用、搞不懂、目标制定后一年半载才想起来看看</span> 等情况。整体来看，现在的同类产品定位上更像是一款 _精致的个人手帐日志_ 而非 <span style="font-weight: 600; color: orange">专注于目标实现</span>。

#### 1.1 痛点剖析

-   <span style="font-weight: 800; text-decoration: underline">产品架构设计复杂</span>：目前市面上几乎所有的目标管理产品都是基于 **目标**、**里程碑** 和 **任务** 维度进行组织管理，这在设计上很理想也很简洁，但是这样的产品架构设计和实际应用场景上存在较多冲突。从理论上看，用户在设定目标的时候通常是基于实现或达成某种特定目的，但是这个目标通常不易达成，也不易细化。因此，由 `目标` ➡️ `里程碑` ⬅️ `任务` 的设定模式会要求用户前置化已经对目标完成有清晰的规划和认知。从用户角度来看，好的设计应该是降低理解成本，帮助用户更好拆解目标值，更加高效达成目标。在产品使用方面上，市面已有的竞品中上述三个维度（目标、里程碑、任务）的数据通常是独立存在，这无形中是在增加用户心智成本，造成用户只是针对产品设置的卡点填入数据，而非聚焦于真实希望达成的目的。此外，这三个维度的数据状态管理和扭转关系设计不符合常识。**目标** 通常更类似概念一样的虚体，而 **任务** 需要落实到具体的行动实体，**里程碑** 则是对一组相关的 **任务** 是否完成的度量；基于现实体验上来看，目标下的任务通常是变化更新的，而 **任务** 通常是跨天的，因此整体目标的状态应当基于最小维度- **当日任务** 进行自动计算更新。

-   <span style="font-weight: 800; text-decoration: underline">目标录入规则不合理</span>：**目标**、**里程碑** 和 **任务** 从来不是割裂的维度，上面分析到 **目标** 和 **里程碑** 的状态其实都是依赖于 **任务** 的设置，考虑到用户在实际需求中思维活动路径是先想要完成某一个特定的目标，然后借助产品细化目标任务，达成高效完成的目的。为了更贴合用户实际思考习惯和思维路径，**目标** 不应当设置具体的启止时间，而是根据 **任务** 进行自动计算。**目标** 下面应该包含具体的多项 **任务**，而 **任务** 又可被拆分到每天的完成部分，即 <span style="color: orange; font-weight: 800">最小录入单元</span>。时间维度上最小录入单元为 **小时**，这也是大多数用户保持专注的时间极限。因此这个有机的整体从小至大划分为 `每日任务（小时维度）` ➡️ `任务` ➡️ `里程碑（一组任务的集合）` ➡️ `目标`。在实际设计中还应考虑到日常适用上的已有条件，比如一天是时间是有限的，因此对于每日任务数量其实是有上限要求。
-   <span style="font-weight: 800; text-decoration: underline">目标完成计算逻辑复杂</span>：市面上所有竞品的任务计算逻辑都设计的非常反直觉，并且具体的计算和规划步骤都转接给用户，这不仅难以理解，并且在很大程度上降低用户使用体验。仔细分析一下计算逻辑我们发现，其核心是在度量任务、目标的完成进度。量化任务进度比较复杂，但是我们仍然可以施展转化大法（即将 **计算逻辑** 转化为 **用户动作**）。通过拆解任务到 `天-时` 的维度，增加 `执行/结束` 的用户操作，收集必要的核心计算数据，通过内置的计算内核根据收集的信息自动实时计算进度<span style="color: #999; font-weight: 300; font-style: italic">（当然这也在另一个方面要求产品设置尽可能细化的卡点，收集尽可能多的用户动作，以使得计算数据和实际更为接近）</span>。

-   <span style="font-weight: 800; text-decoration: underline">任务进行过程用户无感知</span>：**Vis**、**目标地图** 等产品的功能在 **执行阶段** 的存在感非常薄弱。用户在花费大量心力设定好目标和任务等初始化数据后，执行期间却少有相关感知和操作动作，这就造成用户的习惯性忘记，如果一个目标设定在较后的时间开始，很有可能直到设定的期限过去用户都未真正开始，这不仅有悖于产品设计理念，在事实上也没有起到目标管理的效果。从用户心理分析，大多数用户使用相关产品的目的是 **精准的目标和任务管理、及时的通知及多维度进度可视化展示**。可见执行阶段也是产品设计、使用中重要的一环，但是目前的大部分同类竞品和类似产品在这部分都存在缺陷，例如 **Vis**、**目标地图** 等在执行阶段没有及时的消息提醒和有效管理，造成用户感知薄弱；**番茄时钟** 等产品重点放在用户行为管理上，但是对于执行的任务管理却依赖用户决策，这也在一定程度上加重了用户的负担，并且对于最终达成目标不存在明显提效。

#### 1.2 整体设计

> **生命周期**：`立项阶段` ➡️ `执行阶段` ➡️ `复盘阶段`
>
> **设计思想**：以 `用户动作` 来替换 `用户思考`，以降低用户的心智负担
>
> **产品交互**：细化产品生命周期中用户动作，在 `执行阶段` 增加卡点、交互和反馈机制。

-   **生命周期**：此处生命周期是指，用户在使用本产品时，从进入的 **初始态** 到完成的 **终态** 之间所有相关事物（产品形态和用户动作）集合。**Connor** 对此进行高度的抽象简化。

    -   **立项**：是整个 **APP** 运行的入口和逻辑起始点，**Connor** 需要的所有初始化数据都来自这里；这些数据在时间、空间上联系紧密，因此参考项目管理中的概念将这所有动作抽象成一个集合 `立项`。`立项` 包含了 `录入目标`、`拆分任务`、`规划日程` 和 `划定里程碑` 等步骤。各步骤只设定自己运行中所需的必要数据，这样更贴近用户的思考，也不会造成各层级数据冗余。例如：`目标` 自身不再维护一个时间维度数据，应该由包含的所有 `任务` 起止时间计算得到；`里程碑` 对应一组任务的完成状态的 **快照**，不应当单独作为一个维度的数据进行维护。

        |步骤|<span style="display: inline-block; width: 180px">描述</span>|<span style="display: inline-block; width: 185px">状态</span>|状态流转|
        | ---- | ---- | ---- | ---- |
        |<span style="white-space: nowrap">录入目标</span>|<p style="text-align: justify">**目标** 在业务中对应需实现的实体，在产品设计上对应一组任务的集合，是 **任务**、**里程碑** 等数据挂载对象。</p>|`初始化` `待开始` `进行中` `暂停中` `已结束`|[链接](./connor-kickoff.md#131-目标状态流转关系)|
        |<span style="white-space: nowrap">拆分任务</span>|<p style="text-align: justify">**任务** 是对目标的细致划分，具体到可以执行的 **动作**。任务会关联到具体的目标，一般任务可以是跨天执行的，其下包含多个 **日程计划**，任务是执行维度的实体，所有执行动作都会和任务关联，所有的数据也是挂载在任务维度上。</p>|`待开始` `进行中` `已完成` `未完成` `冻结中`|[链接](./connor-kickoff.md#132-任务状态流转关系)|
        |<span style="white-space: nowrap">规划日程</span>|<p style="text-align: justify">**日程计划** 是任务的最小执行粒度，在设定任务数据时会由用户同步设定。**日程** 在产品定位上是 **任务** 在每日的映射，是承载用户动作的载体。</p>|`待开始` `进行中` `已结束`|[链接](./connor-kickoff.md#133-日程状态流转关系)|
        |<span style="white-space: nowrap">划定里程碑</span> | <p style="text-align: justify">**里程碑** 作为度量目标执行的标志，是 **目标进度** 和 **时间** 维度的组合；前几步已经将 **App** 执行所需初始数据设置完毕，因此 **目标进度** 和 **时间** 的关联关系此刻已经构建完成，用户仅需要在构建好的关系结构中放置对应的 **里程碑**，**App** 会自动保存该 **里程碑** 对应的**目标进度** 快照，作为是否点亮 **里程碑式** 的判断依据。由此可见, **里程碑** 依赖于前置数据的准备，自身不应该单独维护一份数据状态，自然应当作为立项阶段的最后一步动作。</p> |`未点亮` `已达标` `未达标`|[链接](./connor-kickoff.md#134-里程碑状态流转关系)|

    -   **执行**：为了进一步提升用户的 **感知** 和 **使用体验**，**Connor** 在执行阶段设计有大量的用户交互动作，以增强用户使用体感和对本产品的依赖。秉持着以 **用户动作** 代替 **用户思考** 的设计思想，**Connor** 参照日常行为模式，从用户真实需求出发，将复杂的思考和输入过程简化成日常操作，以 `引导`、`选择`、`确认`、`点击` 等方式建立起来用户的行为链条。**执行** 阶段整体 [流程图](./connor-kickoff.md#135-connor-执行流程) 如下。

        |<span style="display: inline-block; width: 30px; color: #999">序号</span>|执行时间|执行内容|数据状态流转|
        |--|--|--|--|
        |<span style="color: #999">1</span>|每日零点|根据用户所有任务，排除冻结中、已结束的任务，自动生成当天的日程规划；生成成功后，下发通知用户。此期间，用户可以自由调整日程规划，删除、追加、调整执行顺序等，每次调整后会重新生成当日日程并自动记录一条操作日志。|1. 调整、删除、追加当日某个日程或切换执行顺序，均需进入二级页面操作。<br />2. 切换执行顺序，当日生成的规划执行结果不变，具体执行时间段顺序切换。<br/>3. 删除当日某个日程，会重新生成、下发当日日程、记录操作日志，任务维度的数据会自动去除当日执行计划。<br/>4. 调整日程，可选的日期范围是 **T+1** 到 **任务结束的最后一天**，可选的时间为当日预期剩余的时间段（暂不支持拆分时间段执行）。|
        |<span style="color: #999">2</span>|任意当日日程到达开始执行前 **15min**|触发执行提醒和操作弹窗|1. 提醒用户即将开始日程。<br/>2. 提醒的卡片信息包含以下内容：<br/><ul><li>头部为提醒卡片标题：任务名称（hh:mm~hh:mm）</li><li>下部为具体需要执行的任务信息</li></ul>|

    -   **复盘**：由于前两个生命周期中，app 收集到了较多的~~数据~~，因此

-   **设计思想**：**Connor** 的设计主旨是 $a \neq b$ 是

-   **交互设计**：111 

#### 1.3 状态机

##### 1.3.1 目标状态流转关系

```mermaid
graph LR
A@{ shape: sm-circ, label: "Start" }
E@{ shape: dbl-circ, label: "End" }
A --> a((初始化)) --> |设定目标| b[待开始] --> |任意任务已开始| d[进行中]
d --> |删除所有任务| a
d --> |所有任务已结束| e[已结束]
b --> |点击暂停| f[(暂停库)]
f --> |取消暂停<br/>重新设定数据| b
d --> |点击暂停| f
f --> |取消暂停<br/>重新设定数据| d
f --> |同步任务状态| task[(冻结库)]
e --> E
```

##### 1.3.2 任务状态流转关系

```mermaid
graph LR
A@{ shape: sm-circ, label: "Start" }
E@{ shape: dbl-circ, label: "End" }
A --> |设置任务| a[待开始]
a --> |任务达到开始时间| b[进行中]
b --> |任务到达结束时间| c{待确认}
b --> |所属目标暂停| frezee[(冻结中)]
frezee --> |所属目标恢复| b
frezee --> |所属目标恢复| c
c --> |进度 < 100%| d[未完成]
c --> |进度 = 100%| e[已完成]
d --> E
e --> E
```

##### 1.3.3 日程状态流转关系

```mermaid
graph LR
A@{ shape: sm-circ, label: "Start" }
E@{ shape: dbl-circ, label: "End" }
A --> |生成日程| a[待开始]
a --> |点击开始| b[进行中]
b --> |点击结束｜达到结束时间| c[完成态]
c --> |同步任务完成进度| d[(任务)]
d --> E
```

##### 1.3.4 里程碑状态流转关系

```mermaid
graph LR
A@{ shape: sm-circ, label: "Start" }
E@{ shape: dbl-circ, label: "End" }
A --> |设定里程碑| a[未点亮]
a --> |到达设定里程碑日期| b{内置计算}
b --> |未完成里程碑任务| c[未达标]
b --> |已完成里程碑任务| d[已达标]
c --> E
d --> E
```

##### 1.3.5 Connor 执行流程

```tsx
/**
 * inline: true
 */
import FullScreenMermaid from '@/components/full-screen-mermaid'

const mermaid = `
graph LR
FC@{ shape: f-circ }
END@{ shape: framed-circle }
PROCESS@{ shape: procs, label: 生成当日任务 }
WAITING@{ shape: hourglass, label: "Collate" }
  subgraph timeLine[时间轴]
    direction LR
    PROCESS a1@--> |当日最早日程开始前| modify{{修改当日日程}}:::dashStrongRedNode
    modify a2@----> |修改当日日程| PROCESS
    modify --> |任意当日日程<br>到达开始时间前5min| alarm([⏰<br>提醒弹窗])
    alarm --- WAITING
    subgraph notOperate[无操作]
      WAITING --> qq[结束页]
    end
    alarm --> poi
    subgraph overDo[超期完成]
    poi
    end
    alarm --> poi2
    subgraph lessDo[少于完成]
    poi2
    end
    alarm e2@--> |点击开始| c[开始态]
    subgraph regular[常规路径]
      c e3@--> |点击结束<br>Or<br>达到结束时间| wait[结束页]
      wait --> iiud
    end
  end
FC e1@--> |每日零点| timeLine
timeLine --> |当日最后日程结束| END
e1@{ animate: true }
classDef animateBlue stroke: #00f, stroke-dasharray: 9\,5,stroke-dashoffset: 900,animation: dash 25s linear infinite;
class a1 animateBlue
class a2 animateBlue
classDef animateRed stroke: #f96, stroke-dasharray: 9\,5,stroke-dashoffset: 900,animation: dash 25s linear infinite;
classDef dashStrongRedNode stroke: #f00, stroke-dasharray: 9\,5, stroke-width: 2px, color: red;
class e2 animateRed
class e3 animateRed
class e4 animateRed
`

export default () => <FullScreenMermaid mermaid={mermaid} />
```
<br />

#### 1.4 产品整体流程

**Connor** 作为一个

#### 1.5 架构图

架构是什么的

```mermaid
block-beta
  columns 3
  cc["XKLS"]:3
  a:3
  block:group1:2
    columns 2
    h i j k
  end
  g
  block:group2:3
    %% columns auto (default)
    l m n o p q r
  end
   style cc fill:transparent,stroke:none,height:20px
```

#### 1.6 原型图

原型图杂剧这里

```tsx
/**
 * inline: true
 */
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