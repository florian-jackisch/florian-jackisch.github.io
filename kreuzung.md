---
title: Dritte Station – Kreuzung
layout: page
---

Na, habt ihr die Umgebung an den Teichen schon ein wenig erkundet?
Passend dazu gibt es für den nächsten Code eine spannende Suchaufgabe.

{% include pin.html %}

<html>
    <div id="coordinates" class="text-center" style="display:none">
        <h3>
            <a href="{% include turm_map_link.html %}">Nächste Station</a>
        </h3>
        {% include turm_map.html %}
    </div>

    <script>
        let correctPin = "0021";
    </script>
    <script src="./pin.js"></script>

</html>
