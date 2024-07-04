import { Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import OpenDetails from "./openDetails";
import { MessageDetailsData } from "./messageDetailsData";
import { messageData } from "@/lib/temp/api/mocked";
import {BCConfirm} from "@//lib/temp/api/mocked"
import { Tag } from "./situationStatus";

export default function DefaultMessageDetailModal() {
  return (
    <Dialog>
      <DialogTrigger className="ml-auto">
        <OpenDetails />
      </DialogTrigger>
      <DialogContent className="m-auto flex w-[896px] max-w-[896px] flex-col rounded-xl border-2 bg-white px-2 pb-4">
        <DialogHeader className="w-full px-7 py-4 flex-row gap-3 ">
          <Mail className="flex w-5 h-5 mr-2" />
          <DialogTitle className="flex flex-row items-start justify-start gap-2 font-bold">
            <h1 className="flex flex-row">Detalhes da Mensagem</h1>
          </DialogTitle>
        </DialogHeader>
        <main className="flex flex-col gap-4 items-start justify-start px-10">
          <p className="text-xl font-bold text-black flex py-3">Mensagem</p>
          <div className="flex w-full">
            <section className="flex flex-wrap gap-2 mb-2 w-fit">
              <MessageDetailsData
                className="flex flex-col w-[400px] h-min-11 items-start justify-start"
                indexMessage="Tipo da Mensagem"
                detailMessage={messageData.type}
              />
              <MessageDetailsData
                className="flex flex-col w-[400px] h-min-11 items-start justify-start"
                indexMessage="Fluxo"
                detailMessage={messageData.flow}
              />
              <MessageDetailsData
                className="flex flex-col w-[400px] h-min-11 items-start justify-start"
                indexMessage="Canal"
                detailMessage={messageData.channel}
              />
              <MessageDetailsData
                className="flex flex-col w-[400px] h-min-11 items-start justify-start"
                indexMessage="ID End-To-End"
                detailMessage={messageData.e2eId}
              />
            </section>
            <section className="flex flex-col gap-4 items-start justify-start">
              <MessageDetailsData
                className="flex flex-col w-[400px] h-min-11 items-start justify-start"
                indexMessage="ID End-To-End"
                detailMessage={messageData.iSPBOrigin}
              />
              <MessageDetailsData
                className="flex flex-col w-[400px] h-min-11 items-start justify-start"
                indexMessage="ID End-To-End"
                detailMessage={messageData.iSPBDestin}
              />
              <div>
                <p>Situação</p>
                <Tag status={messageData.status} />
              </div>
              
            </section>
          </div>
        </main>
      </DialogContent>
    </Dialog>
  );
}
