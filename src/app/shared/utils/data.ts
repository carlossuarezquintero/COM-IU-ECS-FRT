import { DocumentChangeAction } from "@angular/fire/compat/firestore";

interface Item {
    id? : string;
    [key: string] : any;
}

export const extractDocumentChangeActionData = (x: DocumentChangeAction<any>, addId =true ): Item | any => {
    const data = x.payload.doc.data();

    if(addId){
        data.id = x.payload.doc.id;
    }

    return data;
}
