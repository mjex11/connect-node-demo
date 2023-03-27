import { HandlerContext } from "@bufbuild/connect";
import { Code, ConnectError } from "@bufbuild/connect";
import { SayRequest, SayResponse } from "./gen/eliza_pb";
import { ElizaService } from "./gen/eliza_connect";
import { ServiceImpl } from "@bufbuild/connect";

export class Eliza implements ServiceImpl<typeof ElizaService> {
  async say(req: SayRequest, context: HandlerContext) {

    if (req.sentence === 'error') {
      throw new ConnectError("I have no words anymore.", Code.ResourceExhausted);
    }

    const serviceTypeName: string = context.service.typeName;
    const res = new SayResponse();
    res.sentence = `You said ${req.sentence} using ${serviceTypeName}`;
    
    return res;
  }
}
