import { connectToServer } from "./socket-client";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Web Socket - Client</h1>
		<span id="server-status">Offline</span>

		<ul id="clients-ul"></ul>
	</div>
`;

connectToServer();