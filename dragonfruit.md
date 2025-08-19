---
title: Vierte Station – Aussichtsturm
layout: page
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.

{% include pin.html %}

<html>
    <div id="coordinates" class="text-center" style="display:none">

        <h3>🎉 Herzlichen Glückwunsch! 🎊</h3>

        <span style="font-weight: normal;">
            Ihr habt den letzten Geocache gefunden.
            Nun geht es <a href="{% include apple_map_link.html %}">zurück zum Parkplatz 🅿️</a>.<br>
        </span>

        {% include apple_map.html %}
    </div>

    <script>
        let correctPin = "1234";
    </script>
    <script src="./pin.js"></script>

</html>
