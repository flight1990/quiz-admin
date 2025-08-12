import { defineStore } from 'pinia'
import type {MenuType} from "../types/moduls/MenuType";

export const useMenuStore = defineStore('menu', {
    state: () => ({
        items: [
            {
                title: 'Главная',
                prependIcon: 'mdi-view-dashboard-outline',
                link: true,
                to: { name: 'index' },
            },
            {
                title: 'Администраторы',
                prependIcon: 'mdi-account-group',
                link: true,
                to: { name: 'users' },
            },
            {
                title: 'Роли',
                prependIcon: 'mdi-security',
                link: true,
                to: { name: 'roles' },
            },
            {
                title: 'Филиалы',
                prependIcon: 'mdi-office-building-marker-outline',
                link: true,
                to: { name: 'units' },
            },
            {
                title: 'Викторины',
                prependIcon: 'mdi-vote',
                link: true,
                to: { name: 'quizzes' },
            },
            {
                title: 'Вопросы',
                prependIcon: 'mdi-chat-question',
                link: true,
                to: { name: 'questions' },
            },
            {
                title: 'Варианты ответов',
                prependIcon: 'mdi-format-list-checks',
                link: true,
                to: { name: 'options' },
            },
            {
                title: 'Ответы',
                prependIcon: 'mdi-forum',
                link: true,
                to: { name: 'answers' },
            },
            {
                title: 'Пользователи',
                prependIcon: 'mdi-account-multiple',
                link: true,
                to: { name: 'guests' },
            },
            {
                title: 'Завершенные викторины',
                prependIcon: 'mdi-playlist-check',
                link: true,
                to: { name: 'quiz-user' },
            },
        ] as MenuType[],
    }),
})
