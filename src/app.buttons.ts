import { Markup } from "telegraf";


export function actionButton() {
    return Markup.inlineKeyboard(
        [
            Markup.button.callback('Tasks list','list'),
            Markup.button.callback('Tasks compeled','done'),
            Markup.button.callback('Edit Task','edit'),
            Markup.button.callback('Remove Task','remove')

        ],
        {
            columns: 2
        }
    )
}