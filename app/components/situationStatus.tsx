import { Awaiting, Checked, ErrorTag } from "../assets/icons/index"

import { FC } from "react";

type Situation =
  | "response"
  | "awaiting"
  | "bcError"
  | "spiProcessed"
  | "awaitingProcess";

interface SituationStatusProps {
  situation: Situation;
}

export const SituationStatus: FC<SituationStatusProps> = ({ ...props }) => {
  switch (props.situation) {
    case "response":
      return (
        <span className="bg-emerald-100 text-green-500 font-semibold p-2 w-fit h-6 text-sm flex justify-center items-center rounded-sm">
          <Checked className="mr-1 w-4 h-4" /> <p>Respondida</p>
        </span>
      );
    case "awaitingProcess":
      return (
        <span className="bg-yellow-50 text-yellow-600 font-semibold p-2 w-fit h-6 text-sm  flex justify-center items-center rounded-sm">
          <Awaiting className="mr-1 w-4 h-4" /> <p>Aguardando Processamento</p>
        </span>
      );
    case "bcError":
      return (
        <span className="bg-orange-100 text-red-600 font-semibold p-2 w-fit h-6 text-sm flex justify-center items-center rounded-sm">
          <ErrorTag className="mr-1 w-4 h-4" /> <p>Erro pelo BC</p>
        </span>
      );
    case "spiProcessed":
      return (
        <span className="bg-emerald-100 text-green-500 font-semibold p-2 w-fit h-6 text-sm flex justify-center items-center rounded-sm">
          <Checked className="mr-1 w-4 h-4" /> <p>Processada pelo SPI</p>
        </span>
      );
    case "awaiting":
      return (
        <span className="bg-yellow-50 text-yellow-600 font-semibold p-2 w-fit h-6 text-sm flex justify-center items-center rounded-sm">
          <Awaiting className="mr-1 w-4 h-4" /> <p>Aguardando resposta</p>
        </span>
      );
    default:
      return (
        <>
          <span className="bg-blue-50 text-blue-500 font-semibold p-2 w-fit h-6 text-sm flex justify-center items-center rounded-sm">
            <p>NULL</p>
          </span>
        </>
      );
  }
};