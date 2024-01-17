#!/usr/bin/env python3

targets = {
    "A": (52.16159163890951, 10.486421422343502),
    "P1": (52.16170163344871, 10.480290960056472),
    "P2": (52.16117196260865, 10.48044698572398),
    "R1": (52.15982581309965, 10.480717522727424),
    "R2": (52.16000716639307, 10.48373773835987),
    "T1": (52.161743458597165, 10.485379989607852),
    "T2": (52.16239544541449, 10.48499828134992),
    "Y": (52.16009179985117, 10.47560817306514),
}

routes = {
    "rot": ["R1", "P1", "Y", "T1", "A"],
    "grün": ["A", "T2", "R1", "P1", "Y"],
    "blau": ["Y", "P2", "A", "T2", "R2"],
}


def round_coords(coords):
    return (round(coords[0], 5), round(coords[1], 5))


print("Table for start")
for color in routes.keys():
    next_route = routes[color][0]
    next_coords = round_coords(targets[next_route])
    print(
        f"| {color.capitalize()} | [{next_coords}](https://www.google.com/maps/search/?api=1&query={next_coords[0]}%2C{next_coords[1]}) |"
    )
print()

for first_letter in set([x[0] for x in targets.keys()]):
    print(f"Table for {first_letter}")
    for color in routes.keys():
        route = routes[color]
        next_route = None
        for pos, x in enumerate(route):
            if x.startswith(first_letter):
                try:
                    next_route = route[pos + 1]
                except IndexError:
                    next_route = None
                break
        if next_route:
            next_coords = round_coords(targets[next_route])
            print(
                f"| {color.capitalize()} | [{next_coords}](https://www.google.com/maps/search/?api=1&query={next_coords[0]}%2C{next_coords[1]}) |"
            )
        else:
            print(f"| {color.capitalize()} | [Zurück zum Start](finish) |")
    print()
