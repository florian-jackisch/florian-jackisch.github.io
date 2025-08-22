---
title: Dritte Station – Kreuzung
layout: page
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.

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
