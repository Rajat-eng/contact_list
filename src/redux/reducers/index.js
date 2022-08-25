export const initialState=[
    {"id": 1,"name": "Leanne Graham","email": "Sincere@april.biz", "phone": 1770736803},
    {"id": 2,"name": "Ervin Howell","email": "Shanna@melissa.tv","phone": 741529635},
    {"id": 3,"name": "Clementine Bauch","email": "Nathan@yesenia.net","phone": 14631234447},
    {"id": 4,"name": "Patricia Lebsack","email": "Julianne.OConner@kory.org","phone": 4931709623},
    {"id": 5,"name": "Chelsey Dietrich","email": "Lucio_Hettinger@annie.ca","phone": 2549541289},
    {"id": 6,"name": "Mrs. Dennis Schulist","email": "Karley_Dach@jasper.info","phone": 1477935847},
    {"id": 7,"name": "Kurtis Weissnat","email": "Telly.Hoeger@billy.biz","phone": 2100676132},
    {"id": 8,"name": "Nicholas Runolfsdottir V","email": "Sherwood@rosamond.me","phone": 5864936943},
    {"id": 9,"name": "Glenna Reichert","email": "Chaim_McDermott@dana.io","phone": 7759766794},
    {"id": 10,"name": "Clementina DuBuque","email": "Rey.Padberg@karina.biz","phone": 789451236}
]

export const contactReducer=(state=initialState,action)=>{

    switch(action.type){
        case "ADD_CONTACT":
            state = [...state, action.payload];
            return state;
        
        case "DELETE_CONTACT":
            const contactFilter = state.filter((contact) =>
              contact.id === action.payload ? null : contact
            );
            state = contactFilter;
            return state; 
        
        case "UPDATE_CONTACT":
            const contactUpdate=state.filter((contact)=>{
                if(contact.id===action.payload.id ){
                    return Object.assign(contact,action.payload)
                }
                else{
                    return contact
                }
            });
            state=contactUpdate;
            return state;

        default: return state;
    }
}