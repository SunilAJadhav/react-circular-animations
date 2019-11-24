import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #333;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    background-color: #2e7423;
    background-image: radial-gradient(#2f8e2c,#2e7423);
    font-family: 'RobotoRegular','Roboto','Droid Sans','Helvetica Neue','Segoe UI','Segoe','Open Sans','Helvetica','Arial',sans serif;
  }

  header {
    width: 900px;
    text-align: left;
    margin: 0 auto;
    padding: 20px 0;
}
nav {
	background: #222;
}
nav ul {
    width: 900px;
    text-align: left;
    margin: 0 auto;
    padding: 0;
    list-style: none;
}
nav ul li {
    margin: 0;
    padding: 12px 0 12px 4px;
}
nav ul li a {
    color: #fff;
    text-decoration: none;
}

article {
    padding: 8px 16px 16px;
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
}
article h1 {
    font-size: 22px;
}
article .preamble {
    font-weight: bold;
}
article aside {
    float: right;
    width: 220px;
    border-left: solid 1px #ccc;
    margin-left: 8px;
    padding: 0 0 8px 16px;
}
article aside h2 {
    font-size: 15px;
    margin: 4px 0;
}
article aside img {
    width: 220px;
}
footer {
    background: #333;
    color: #999;
    position: absolute;
    bottom: 0;
    width: 100%;
}
footer .inner {
    width: 900px;
    text-align: left;
    margin: 0 auto;
}
footer .inner p {
    padding: 16px 8px;
}
`
export default GlobalStyle;