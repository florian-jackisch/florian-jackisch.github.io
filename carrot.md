---
title: Dritte Station
layout: page
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.

{% include pin.html %}

<html>
    <div id="coordinates" class="text-center" style="display:none">
        <a href="{% include dragonfruit_map_link.html %}">Nächste Station</a><br>
        {% include dragonfruit_map.html %}
    </div>

    <script>
        let correctPin = "1234";
    </script>
    <script src="./pin.js"></script>

</html>
