export default interface Content {
    key: number;
    question?: string;
    answer?: string;
    notes?: Array<NoteModel>
}

export interface NoteModel{
    key: number;
    content: string;
}