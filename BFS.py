def bfs(visited, graph, node):
    visited.append(node)
    queue.append(node)
    while queue:
        v = queue.pop(0)
        print(v)
        for u in graph[v]:
            if u not in visited:
                visited.append(u)
                queue.append(u)

print("")
print("Breadth-First Search Result, starting from vertex 1:-")


g = {
    '1': ('2', '3'),
    '2': ('4', '5'),
    '3': ('6'),
    '4': (),
    '5': ('6'),
    '6': ()
}


visited = []
queue = []

bfs(visited, g, '1')












