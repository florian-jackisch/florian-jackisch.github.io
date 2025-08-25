---
title: Vierte Station – Aussichtsturm
layout: page
---

Ist diese Aussicht nicht herrlich?
Jetzt ist noch einmal euer Wissen oder eure Einschätzung gefragt –
diesmal zu dem Ort, an dem ihr euch befindet.

![Ente auf Aussichtsturm](images/duck_turm.jpeg){: style="border-radius: 16px;" }

{% include pin.html %}

<html>
    <div id="coordinates" class="text-center" style="display:none">

        <h3>🎉 Herzlichen Glückwunsch! 🎊</h3>

        <span style="font-weight: normal;">
            Ihr habt den letzten Geocache gefunden.
            Nun geht es <a href="{% include parkplatz_map_link.html %}">zurück zum Parkplatz 🅿️</a>.<br>
        </span>

    {% include parkplatz_map.html %}
    </div>

    <script>
        let correctPin = "1842";
    </script>
    <script src="./pin.js"></script>

</html>
