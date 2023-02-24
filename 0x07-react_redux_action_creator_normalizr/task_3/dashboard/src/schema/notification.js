import * as notificationData from "../../../../notifications.json";
import { normalize, schema } from "normalizr";


const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: guid });
const notification = new schema.Entity("notifications", {
    author: user,
    context: message,
});

const normalized = normalize(notificationData, [notification]);

export default function getAllNotificationsByUser(userId) {
    const output = [];
    const notifications = normalized.enities.notification;
    const messages = normalized.entities.messages;

    for (const id in notifications) {
        if (notification[id].author === userId) {
            output.push(messages[notification[id].context]);
        }
    }
    return (output);
}

export { normalized };