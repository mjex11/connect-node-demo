import { ConnectRouter } from "@bufbuild/connect";
import { ElizaService } from "./gen/eliza_connect";
import { Eliza } from "./service";

export default (router: ConnectRouter) => {

  router.service(ElizaService, new Eliza());

}


