import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class TodoList extends React.Component {
    static contextType = ThemeContext;

    render() {
        const { isDarkTheme, lightTheme, darkTheme, changeTheme } = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;
        return (
            <div style={{ background: theme.background, color: theme.text, height: '140px', textAlign: 'center'}}>
                <p className="item" >Plan trip with family</p>
                <p className="item" >Go for shipping for dinner</p>
                <p className="item" >o for a walk</p>
                <button className="ui button primary" onClick={changeTheme}> Change the theme </button>
            </div>
        )
    }
}
export default TodoList;