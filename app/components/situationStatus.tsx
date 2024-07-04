import { Awaiting, Checked, ErrorTag } from "../assets/icons/index"


interface TagProps {
    status?: 'erro' | 'awaiting' | 'received' | 'processSpi'
  }
  
  const statusMap = {
    erro: {
      icon: <ErrorTag name="erro" color="#FF0000" width={16} height={16} />,
      bgColor: "bg-red-100",
      textColor: "text-red-500",
      title: "Erro pelo BC"
    },
    aguardando: {
      icon: <Awaiting name="awaiting" color="#FFA500" width={16} height={16} />,
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-500",
      title: "Aguardando resposta"
    },
    recebido: {
      icon: <Checked name="check-circle" color="#19BC55" width={16} height={16} />,
      bgColor: "bg-emerald-100",
      textColor: "text-green-500",
      title: "Respondida"
    },
    processSpi: {
        icon: <Checked name="check-circle" color="#19BC55" width={16} height={16} />,
        bgColor: "bg-emerald-100",
        textColor: "text-green-500",
        title: "Processada pelo SPI"
      },
  };

  export const Tag: React.FC<TagProps> = ({ status }) => {
    const { icon, bgColor, textColor, title } = statusMap[status];
  
    return (
      <span className={`flex w-fit items-center justify-center gap-1 rounded-md p-1 px-2 text-sm font-bold ${bgColor} ${textColor}`}>
        {icon}
        {title}
      </span>
    );
  };
