document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
      initialView: 'viewsDay',
      slotMinTime: '08:00:00',
      slotMaxTime: '17:00:00',
      dayHeaders: false,
      dayHeaderFormat: {weekday: 'long'},
      slotLabelFormat:[
            {month: '2-digit', day: '2-digit', year: 'numeric', weekday: "short"},
            {hour: "numeric", minute: "numeric"}
        ],
      locale: 'ru',
      selectable: true,
      headerToolbar: {
        left: 'prev,next',
        center: 'title',
        right: 'resourceTimelineDay,viewsWeek,dayGridMonth'
      },
      views: {
          viewsWeek: {
            type: "resourceTimelineWeek",
            slotLabelFormat: [
                {month: '2-digit', day: '2-digit', year: 'numeric', weekday: "short"},
                {hour: "numeric", minute: "numeric"}
            ]
          },
          viewsDay: {
              type: "resourceTimelineDay",
              slotLabelFormat: [
                {month: '2-digit', day: '2-digit', year: 'numeric', weekday: "long"},
                {hour: "numeric", minute: "numeric"}
            ]
          }
      },
      buttonText: {
          day: 'день',
          week: 'неделя',
          month: 'месяц'
      },
      events: "https://api.npoint.io/f317496be112964bcd52",
      resources: "https://api.npoint.io/85f7bd82edb463163315",
    });
    calendar.render();
  });