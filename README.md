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

Therefore, we would like to create a service that brings together and displays various information needed to analyze the value of soccer club stocks. We predict that many more sports clubs will list in the near future, and we want to be a pioneer in this trend. For example, a site called [coinmarketcap.com](http://coinmarketcap.com/), which gathers and displays information on blockchain-based cryptocurrencies, was not popular for several years after its launch in 2013, but now that the size of the cryptocurrency market has grown, the number of monthly visits exceeds 100 million. Our team will also start with information on about 20 soccer clubs and grow into a service that encompasses stocks of all sports clubs in the future.

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
├── Clubs
│ ├── ClubLists.tsx
│ ├── DisplayPanel.tsx
│ ├── Financial.tsx
│ ├── InfoTab.tsx
│ ├── News.tsx
│ ├── Overview.tsx
│ ├── QuarterlyFiguresTable.tsx
│ ├── ResponseBar.tsx
│ ├── SideView.tsx
│ └── Squad.tsx
├── Financial
├── Layout.tsx
├── MainOverview
│ ├── MainOverview.tsx
│ └── TableSheet.tsx
├── Posts
│ ├── CreatePost.tsx
│ ├── RecentPosts.tsx
│ ├── ReportPost.tsx
│ └── TopPosts.tsx
├── commons
│ ├── Chat.tsx
│ ├── Header.tsx
│ ├── Login.test.tsx
│ ├── Login.tsx
│ ├── LoginModal.tsx
│ ├── Profile.tsx
│ ├── Sidebar.tsx
│ ├── SignUp.test.tsx
│ ├── SignUp.tsx
│ ├── UserInfo.tsx
│ ├── api.ts
│ ├── fire-base.ts
│ └── util.ts
├── components
│ └── NavButton.tsx
├── hooks
│ └── useChatData.ts
├── index.tsx
├── interface
│ ├── AWSInterface.ts
│ └── SocketInterface.ts
├── mocks
│ ├── browsers.ts
│ └── handler.ts
├── pages
│ ├── Clubs.tsx
│ ├── DetailPage.tsx
│ ├── Main.tsx
│ ├── NotFound.tsx
│ ├── PostDetail.tsx
│ ├── PostList.tsx
│ └── TradingViewWidget.tsx
├── states
│ ├── constants.ts
│ ├── recoil.ts
│ └── types.ts
├── styles
│ └── tailwind.css
└── types.ts
```

## 4. Features

### Stocks

<img width="824" alt="image" src="https://github.com/footballStock/client/assets/99087502/ba8c5e8e-87e4-40cd-b602-767c3359eb7f">

<p>The main page of our service is a page where you can see all the stocks of all clubs we own in a table format at a glance. For each team's stock, price, market cap, 1-day volume, 1-day price change, 1-week price change, 1-week mini price chart, and 1-month mini price chart are displayed at a glance. When user clicks on each club's stock, he will be taken to the [Detailed Information] page.</p>

### Log In & Sign Up

<img width="163" alt="image" src="https://github.com/footballStock/client/assets/99087502/15993bda-24c3-4570-a3bd-4d527dd837c3">

<img width="292" alt="image" src="https://github.com/footballStock/client/assets/99087502/297021a0-f5b4-4935-9581-15b0debd0af0"><img width="292" alt="image" src="https://github.com/footballStock/client/assets/99087502/14b71b67-c5de-4fcf-a3a1-25cb320f58b5">

<p>The login feature ensures secure and personalized access for returning users, while the sign-up option allows new users to join our community. Incorporating Google authentication streamlines the login process, offering a one-click sign-in alternative. These features are essential for enabling interactive elements like posting and chatting, creating a tailored user experience on the platform. Together, they facilitate easy entry and encourage user engagement within our website's ecosystem.

</p>

### Profile

<img width="166" alt="image" src="https://github.com/footballStock/client/assets/99087502/5c1939c7-80b1-4623-8403-970e7dcb8ffa">

<p>Our website includes a user profile feature that allows for customization of one's personal display within the community. Users can easily update their nickname and profile picture by navigating to the 'User Info' section, ensuring their identity on the platform is unique and recognizable. The process is streamlined with a simple 'CHANGE' button for quick edits.</p>

### Chatting

<img width="182" alt="image" src="https://github.com/footballStock/client/assets/99087502/47c361d1-fb75-4754-a59f-17a5587c9c46">

<p>Real-time chat services are also designed to increase users' retention time and number of visits. In Korea, Naver Sports streaming has a real-time chat function, and when watching the Olympics or World Cup through Naver Sports streaming, a huge number of chats are posted. However, there is no place to chat in real time when watching the Premier League or Champions League. By incorporating a single-channel real-time chat function, we meet the needs of these sports fans and increase the competitiveness of our service.</p>

### Posts

<img width="824" alt="image" src="https://github.com/footballStock/client/assets/99087502/eb75af8b-8310-4285-bc0e-f054c18457ec">

<p>This page is a free-form board page. Users need to log in to use the board functionality. Users have the freedom to post articles, and they can also utilize features like liking, disliking, and reporting posts. A community always helps increase the time spent on the website and the number of visits. Therefore, we are installing a community function, Board, so that users can freely leave comments.</p>

### Create Post

<img width="520" alt="image" src="https://github.com/footballStock/client/assets/99087502/c82ef9a2-98fd-4349-a656-073321ac8e48">

<p>The "Create Post" feature allows users to share their thoughts and experiences with the community. By clicking on the create post button, a modal appears where users can enter a title and the main content of their post. Additionally, they have the option to upload images to accompany their text, enhancing the visual appeal and engagement of their post. Once the content is ready, hitting the "POST" button will publish it to the platform.</p>

### Clubs

<img width="824" alt="image" src="https://github.com/footballStock/client/assets/99087502/b41c08f4-b7b5-411b-90dd-f8d2b1bcb67c">

<p>The "Clubs" feature on Trade2Goal is a specialized segment focused on football clubs with publicly traded shares. On the left sidebar of the page and "Clubs" page, users are greeted with a streamlined display of football clubs, each represented by their iconic logos. This visual directory serves as an interactive tool, allowing users to click on a club's emblem to learn more about their financial standing and stock market presence.</p>

### Detailed Information

<p>A detailed information page is provided for each club. The information provided on this page can be broadly classified into four categories. [Overview] [Squad] [News] [Financial]. Here, we list what information is included in each category.</p>

- ### Overview

<img width="824" alt="image" src="https://github.com/footballStock/client/assets/99087502/ea335278-11cd-4ad3-a1a4-c62aee163557">

<p>The "Overview" tab is designed to give users a quick snapshot of a football club's performance in their respective league. When you click on a specific club like Manchester United, the overview tab will show detailed league information such as the number of games played (PL), wins (W), draws (D), losses (L), goal difference (+/-), total goals scored and conceded (GD), and the club's current points tally (PTS). This information is crucial for fans and analysts to understand the club's standing and form within the league at a glance.</p>

- ### Squad

<img width="824" alt="image" src="https://github.com/footballStock/client/assets/99087502/d014212e-b222-43e8-bc8b-39884e5758ec">

<p>The "Squad" tab on the website provides a comprehensive view of a football club's current team roster, categorized by position groups: Attackers, Midfielders, Defenders, and Goalkeepers. Each player is represented with their name, photo, and jersey number, offering fans and visitors an easy way to familiarize themselves with the team members. This section is crucial for understanding the club's on-field strength and depth across various positions.</p>

- ### News

<img width="824" alt="image" src="https://github.com/footballStock/client/assets/99087502/f805aa74-dd77-4b7b-a72c-ae837393e1c7">

<p>News tab crawls and provides news from various countries related to the club. Since there is no other site that shows news from various countries in one place, it increases the competitiveness of our service.</p>

- ### Financial

<img width="824" alt="image" src="https://github.com/footballStock/client/assets/99087502/80011572-0027-48f4-98fb-79f574699296">

<p>The "Financial" tab on the website provides a detailed financial overview of a club, segmented into three key reports: the Income Statement, Balance Sheet, and Cash Flow Statement. These reports are updated quarterly to reflect the most recent financial data. The Income Statement reveals the club's revenue, costs, and profitability; the Balance Sheet displays assets, liabilities, and equity, indicating the club's financial health; and the Cash Flow Statement shows the actual cash generated and used over the period, providing insight into the club's liquidity.</p>

## 5. Contributors

<div align="center">

|           **Beomsu Shin**            |                **Haejune Jung**                |              **Inwoo Tae**              |         **SeungHwan Noh**          |
| :----------------------------------: | :--------------------------------------------: | :-------------------------------------: | :--------------------------------: |
| [@bams11](https://github.com/bams11) | [@haejunejung](https://github.com/haejunejung) | [ @inu0104](https://github.com/inu0104) | [@w-noh](https://github.com/w-noh) |

</div>
