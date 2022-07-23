import NoteFooter from "./noteFooter"

export default function Note({note}){
    return(
        <div id={note.id} className={"inline-block w-1/5 h-60 mx-5 my-3 rounded-xl  text-den relative shadow-type3 "
            +note.color+"Note "
            +note.font}>
            <h1 className="font-semibold text-2xl ml-3 py-2 overflow-hidden">
            {note.title}
            </h1>
            <p className="px-3 pt-1 overflow-hidden">
                {note.text}
            </p>
            <NoteFooter date = {note.date} id = {note.id}/>

        </div>
    )
}
