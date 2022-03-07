import { Avatar } from "domains/avatar/components/Avatar";
import { Project } from "domains/project/components/Project";
import profileSrc from "assets/profile.webp";
import coopsSrc from "assets/coops.webp";
import srSrc from "assets/sr.webp";
function App() {
  return (
    <main className="app">
      <article>
        <aside className="profile">
          <Avatar src={profileSrc} alt="profile" size={120} />
        </aside>
        <h1>양호진</h1>
        <address>
          <ul>
            <li>
              <a href="mailto:deokji53@gmail.com">deokji53@gmail.com</a>
            </li>
            <li>
              <a href="tel:010-2623-2702">010-2623-2702</a>
            </li>
            <li>
              <a href="https://tnra.ro" target="_blank">https://tnra.ro/</a>
            </li>
            <li>
              <a href="https://github.com/tnraro" target="_blank">github.com/tnraro</a>
            </li>
          </ul>
        </address>
        <p>자기소개 로렘 입숨 라로바로 라로바보 라로바보 라로바보</p>
        <article>
          <h2>프로젝트</h2>
          <Project
            title="coops"
            link="https://github.com/hoshi-hitsuji/coops"
            date={["2021-04", "2021-06"]}
            image={coopsSrc}
            text={[
              "게이머를 위한 익명 음성 채팅 서비스",
              "웹 디자인과 웹 개발을 담당",
              "REST API와 SSE, Redis의 pub/sub를 이용해 실시간 채팅 기능 구현",
              "AWS 프리티어가 끝날 때까지 운영",
            ]}
            stack={["Next.js", "Redis", "Docker"]}
          />
          <Project
            title="psh"
            link="https://github.com/hoshi-hitsuji/psh"
            date={["2020-11", "2020-12"]}
            text={[
              "개인화된 환경을 제공하는 IoT 어드민",
              "가족 중 IoT 디바이스의 소유자만이 제어할 수 있는 서비스",
              "네트워크에 적합한, 짧지만 적은 충돌 가능성을 가지는 ID 구현",
              "가족구성원을 추가, 제외할 수 있는 가상 홈 개발",
              "IoT 디바이스 추가, 제거, 소유자 변경, 실시간 제어 기능 개발",
              "AWS 프리티어가 끝날 때까지 운영",
            ]}
            stack={["Next.js", "MQTT", "GraphQL"]}
          />
          <Project
            title="소프트웨어 래스터라이저"
            link="https://github.com/tnraro/graphics"
            date={["2020-07"]}
            image={srSrc}
            text={[
              "JS로 작성한 Software Rasterizer",
              "래스터라이저를 구현하여 원리를 학습하는 것을 목표로 한 개인 프로젝트",
            ]}
            stack={["TypeScript"]}
          />
        </article>
      </article>
    </main>
  )
}

export default App
