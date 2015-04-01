define(function(require, exports, module) {

    // Libs
    var $ = require('jquery');





    /**
     * Конструктор
     */
    function Module(config) {
        // Сохраняем в конфиг экземляра
        this.config = config || {};

        // Вызываем инициализацию
        this.init();
    }



    /**
     * Прототип
     */
    Module.prototype = {

        /**
         * Инициализация
         */
        init: function() {
            this.$container = $(this.config.container);

            this.render();
        },


        /**
         * Отрисовка
         */
        render: function() {
            // Создаем элемент
            this.$el = $('<div></div>');
            // Добавляем его в контейнер
            this.$container.append(this.$el);
            // Меняем цвет
            this.$el.css('background', this.config.color);

            // Если передан параметр text, то установим его сразу
            if(this.config.text) {
                // Для этого вызываем собственный метод say()
                this.say(this.config.text);
            }
        },


        /**
         * Вставляет текст в элемент
         * @param  {[type]} message [description]
         */
        say: function(message) {
            this.$el.html(message)
        },

    };


    // Экспортируем модуль
    module.exports = Module;
});
