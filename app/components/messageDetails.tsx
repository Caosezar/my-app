import { Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import OpenDetails from "./openDetails";
import { MessageDetailsData } from "./messageDetailsData";
import { BCConfirm, CorrespondingMessage, messageData } from "@/lib/temp/api/mocked";
import { SituationStatus } from "./situationStatus";

export default function DefaultMessageDetailModal() {
  return (
    <Dialog>
      <DialogTrigger className="ml-auto">
        <OpenDetails />
      </DialogTrigger>
      <DialogContent className="m-auto flex max-h-fit w-[896px] max-w-fit flex-col rounded-xl border-2 bg-white px-2 pb-4">
        <DialogHeader className="w-full px-7 py-4 flex-row gap-3 ">
          <Mail className="flex w-5 h-5 mr-2" />
          <DialogTitle className="flex flex-row items-start justify-start gap-2 font-bold">
            <h1 className="flex flex-row">Detalhes da Mensagem</h1>
          </DialogTitle>
        </DialogHeader>
        <main className="flex flex-col gap-4 items-start justify-start px-10 pb-8">
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
            <hr />
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
                <SituationStatus situation="bcError" />
              </div>
            </section>
          </div>
          <p className="text-xl font-bold text-black flex py-3">
            Confirmação - Banco Central
          </p>
          <div className="flex w-full" >
            <section className="flex flex-wrap gap-2 mb-2 w-fit">
              <MessageDetailsData
                className="flex flex-col w-[400px] h-min-11 items-start justify-start"
                indexMessage="ID Recepção BC"
                detailMessage={BCConfirm.idBcReceptor}
              />
              <MessageDetailsData
                className="flex flex-col w-[400px] h-min-11 items-start justify-start"
                indexMessage="Confirmação BC"
                detailMessage={BCConfirm.bcConfirm}
              />
              <MessageDetailsData
                className="flex flex-col w-[400px] h-min-11 items-start justify-start"
                indexMessage="Data/Hora Confirmação BC"
                detailMessage={BCConfirm.bCConfirmDate}
              />
            </section>
            <section className="flex flex-col gap-4 items-start justify-start">
              <MessageDetailsData
                className="flex flex-col w-[400px] h-min-11 items-start justify-start"
                indexMessage="Mensagem de Confirmação"
                detailMessage={BCConfirm.confirmMessage}
              />
              <MessageDetailsData
                className="flex flex-col w-[400px] h-min-11 items-start justify-start"
                indexMessage="Status Code"
                detailMessage={BCConfirm.confirmMessagestatusCode}
              />
              <MessageDetailsData
                className="flex flex-col w-[400px] h-min-11 items-start justify-start"
                indexMessage="XML"
                detailMessage={BCConfirm.xML}
              />
                <span className="flex w-fit items-start justify-start gap-2 p-1 px-2 text-sm font-bold text-verdemusgo underline">
                  <p>Ver XML</p>
                </span>
            
            </section>
          </div>
          <p className="text-xl font-bold text-black flex py-3">
            Mensagem Correspondente
          </p>
          <div className="flex w-full">
            <section className="flex flex-wrap gap-2 mb-2 w-fit">
              <MessageDetailsData
                className="flex flex-col w-[400px] h-min-11 items-start justify-start"
                indexMessage="ID Recepção BC"
                detailMessage={CorrespondingMessage.messageType}
              />
              <MessageDetailsData
                className="flex flex-col w-[400px] h-min-11 items-start justify-start"
                indexMessage="Confirmação BC"
                detailMessage={CorrespondingMessage.e2eID}
              />
            </section>
          
            <section className="flex flex-wrap gap-2 mb-2 w-fit">
              <MessageDetailsData
                className="flex flex-col w-[400px] h-min-11 items-start justify-start"
                indexMessage="ID Recepção BC"
                detailMessage={CorrespondingMessage.bCConfirmDate}
              />
                <span className="flex w-fit items-start justify-start gap-2 p-1 px-2 text-sm font-bold text-verdemusgo underline">
                  <p>Ver XML</p>
                </span>
            </section>
          </div>
        </main>
      </DialogContent>
    </Dialog>
  );
}
