<h1 align="center">
<p>Trade2goal</p>
<img width="195" alt="image" src="https://github.com/footballStock/client/assets/99087502/e05512f7-dc40-4333-b8fa-93eaa8f590a0">
<br>
</h1>
Deploy : <a href="https://Trade2goal.com">https://Trade2goal.com</a>

## 1. Introduce

Sports are a time-honored medium of enjoyment that brings together passion, excitement, victory and defeat. Even around us, it's easy to find people who are fascinated by a particular sport. As capitalist society becomes more complex, changes in the financial aspects of these sports are also occurring.

The sport that responds fastest to these changes is soccer. Modern soccer clubs are complex corporations that require enormous amounts of capital. To attract global capital, more and more soccer clubs are listing their clubs on the stock market. Prominent examples include Manchester United and Juventus.

We can easily see that soccer clubs have very different characteristics from other traditional businesses. They are not affected by raw material supply or trade disputes like manufacturing companies, nor are they affected by innovative product launches or mergers and acquisitions like tech companies. What is most important to the value of a soccer club are the wins and losses of matches and the performance and potential of its players.

Many investors are looking to sport club stocks as a new investment sector. This is due to the size of the rapidly growing sports market. Additionally, many passionate fans of the sport are also looking to club stocks as a way to express their passion. This is because they can directly contribute to the club beyond simply watching the game and buying souvenirs such as uniforms.

As mentioned earlier, analyzing the value of soccer club stocks requires different data than that of other companies. However, there is no service that provides game scores, player performances, etc. in one place along with financial information of soccer clubs.

Therefore, we would like to create a service that brings together and displays various information needed to analyze the value of soccer club stocks. We predict that many more sports clubs will list in the near future, and we want to be a pioneer in this trend. For example, a site called [coinmarketcap.com](http://coinmarketcap.com/), which gathers and displays information on blockchain-based cryptocurrencies, was not popular for several years after its launch in 2013, but now that the size of the cryptocurrency market has grown, the number of monthly visits exceeds 100 million. Our team will also start with information on about 12 soccer clubs and grow into a service that encompasses stocks of all sports clubs in the future.

## 2. Development Environment

### Frontend Technologies

#### Programming Languages

![TypeScript Badge](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=TS&logoColor=white)

#### Frameworks and Libraries

![React Badge](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=React&logoColor=white)
![Recoil Badge](https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white)
![React Query Badge](https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![Tailwind CSS Badge](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

#### Testing Libraries

![Testing Library Badge](https://img.shields.io/badge/testinglibrary-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white)
![Mock Service Worker Badge](https://img.shields.io/badge/mockserviceworker-FF6A33?style=for-the-badge&logo=mockserviceworker&logoColor=white)

### Design Tools

- **Figma**: User Interface and User Experience Design

### Collaboration Tools

- **Notion**: Project Documentation and Management
- **Zoom**: Team Meetings and Communication
- **GitHub Issues**: Issue Tracking and Project Management

### Deployment

- **AWS S3**: Hosting and Storage Services

### Continuous Integration and Continuous Deployment (CI/CD)

- **GitHub Actions**: Automated Deployment and Integration

## 3. Project Architecture

```
src
├── App.tsx
├── ClubDetail
│   ├── Financial
│   │   ├── DisplayPanel.tsx
│   │   ├── Financial.tsx
│   │   ├── QuarterlyFiguresTable.tsx
│   │   └── ResponseBar.tsx
│   ├── InfoTab.tsx
│   ├── News.tsx
│   ├── Overview.tsx
│   ├── SideView.tsx
│   └── Squad.tsx
├── Clubs
│   └── ClubLists.tsx
├── Layout.tsx
├── Posts
│   ├── CreatePost.tsx
│   ├── RecentPosts.tsx
│   ├── ReportPost.tsx
│   └── TopPosts.tsx
├── commons
│   ├── Chat.tsx
│   ├── Header
│   │   ├── Header.tsx
│   │   ├── Login.tsx
│   │   ├── LoginModal.tsx
│   │   ├── Profile.tsx
│   │   ├── SignUp.tsx
│   │   └── UserInfo.tsx
│   ├── Sidebar.tsx
│   └── TableSheet.tsx
├── index.tsx
├── interface
│   ├── AWSInterface.ts
│   ├── FirebaseInterface.ts
│   └── SocketInterface.ts
├── mocks
│   ├── browsers.ts
│   └── handler.ts
├── pages
│   ├── Clubs.tsx
│   ├── ComingSoon.tsx
│   ├── DetailPage.tsx
│   ├── MainOverview.tsx
│   ├── NotFound.tsx
│   ├── PostDetail.tsx
│   ├── PostList.tsx
│   └── TradingViewWidget.tsx
├── states
│   ├── constants.ts
│   ├── recoil.ts
│   └── types.ts
├── styles
│   └── tailwind.css
├── types.ts
└── utils
    ├── api.ts
    └── util.ts
```

## 4. Features Present on All Pages

Before explaining the implementation, it's important to note that the file or folder location for each category has been documented. You can start exploring the features from these specified locations.

Our website includes a header, sidebar, and chat feature on every page. These components are organized within the `commons` folder, categorized by their functionalities.

### 1. Header (`/commons/Header/*`)

- **Description**: The header is responsible for navigation, login, and profile modification features.

  - `Header.tsx`: Manages the overall layout of the Header. It displays navigation options like Stocks, Posts, Clubs, and shows Login, SignUp when not logged in. After login, it displays the user's profile.
  - `Login.tsx`: Contains the login button UI and manages the login process through `LoginModal`.
  - `SignUp.tsx`: Contains the SignUp button UI and manages the registration process through `LoginModal`.
  - `LoginModal.tsx`: Handles the actual login and registration functionalities. It includes email and password login via Firebase, and Google social login.
  - `Profile.tsx`: Manages the profile display post-login.
  - `UserInfo.tsx`: Provides the UI for profile modification when the profile is clicked. It includes functionalities for changing the photo and nickname.

### 2. Sidebar (`/commons/Sidebar.tsx`)

- **Description**: The sidebar displays 12 football clubs currently listed on the stock market. Clicking on these clubs shows detailed information about them.

### 3. Chat (`/commons/Chat.tsx`)

- **Description**: Real-time chatting is facilitated using a WebSocket interface, with an infinite scroll feature to minimize rendering. The configuration of the WebSocket interface can be found in `/interface/SocketInterface.ts`.

## 5. Detailed Overview of Key Pages

Before explaining the implementation, it's important to note that the file or folder location for each category has been documented. You can start exploring the features from these specified locations.

Here's an in-depth look at the five primary pages of our website: MainOverview, PostList, PostDetail, Clubs, and DetailPage. Detailed information about each page is provided below:

### 1. MainOverview (`/pages/MainOverview.tsx`)

- **Description**: This is the landing page that visitors first encounter. It displays stock information for various clubs, covering four key aspects: Price, 24h(%), Market Cap, and Volume.

### 2. PostList (`/pages/PostList.tsx`, `/Posts/*`)

- **Description**: This page showcases the top 3 posts at the top, followed by a chronological list of posts. The posts are organized using pagination, displaying a set number of posts per page.
  - `TopPosts.tsx`: Displays the top 3 posts and is located in the same row as the CreatePost feature.
  - `CreatePost.tsx`: Handles the creation of new posts, allowing users to upload photos and write content.
  - `RecentPosts.tsx`: Shows the most recent posts and utilizes pagination to manage the display of posts across multiple pages.

### 3. PostDetail (`/pages/PostDetail.tsx`, `/Posts/*`)

- **Description**: While PostList provides an overview of posts, PostDetail allows users to view the contents of an individual post. It includes features like upvoting, downvoting, and reporting.

### 4. Clubs (`/pages/Clubs.tsx`, `/Clubs/*`)

- **Description**: This page provides an overview of the football clubs featured on our site, along with the leagues they are part of. It's designed to offer easy access to club information.

### 5. DetailPage (`/pages/DetailPage.tsx`, `/ClubDetail/*`)

- **Description**: DetailPage consists of five key features: TradingViewWidget and four tabs - Overview, Squad, News, and Financial.
  - `TradingViewWidget.tsx`: Displays the TradingViewWidget at the top, providing real-time stock information.
  - `Overview.tsx`: The first of the four tabs, Overview presents a general status of each club in their respective leagues.
  - `Squad.tsx`: The second tab, offering information about the club's players, categorized into forwards, midfielders, defenders, and goalkeepers.
  - `Financial/*`: Displays financial metrics of each club, using Nivo for stock information visualization. Data is updated every three months through web scraping.

## 5. Contributors

<div align="center">

|           **Beomsu Shin**            |                **Haejune Jung**                |              **Inwoo Tae**              |         **SeungHwan Noh**          |
| :----------------------------------: | :--------------------------------------------: | :-------------------------------------: | :--------------------------------: |
| [@bams11](https://github.com/bams11) | [@haejunejung](https://github.com/haejunejung) | [ @inu0104](https://github.com/inu0104) | [@w-noh](https://github.com/w-noh) |

</div>
