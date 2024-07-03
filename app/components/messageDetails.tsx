import { Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import OpenDetails from "./openDetails";

export default function CertifiedDetails() {
  return (
    <Dialog>
      <DialogTrigger>
        <OpenDetails />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader> 
            <Mail />
            <DialogTitle>Detalhes da Mensagem</DialogTitle>
            <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
