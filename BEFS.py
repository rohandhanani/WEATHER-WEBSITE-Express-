from queue import PriorityQueue
v = 14
graph = [[] for _ in range(v)]

def add_edge(x, y, cost):
    graph[x].append((y, cost))
    graph[y].append((x, cost))

add_edge(0, 1, 3)
add_edge(0, 2, 6)
add_edge(0, 3, 5)
add_edge(1, 4, 9)


def best_first_search(src, target, n):
    visited = [False] * n
    pq = PriorityQueue()
    pq.put((0, src))
    visited[src] = True
    
    while not pq.empty():
        u = pq.get()[1]
        print(u)
        
        if u == target:
            break

        for v, c in graph[u]:
            if not visited[v]:
                visited[v] = True
                pq.put((c, v))

source = 0
target = 9

print("Best-First Search Result, starting from vertex 1:")
best_first_search(source, target, v)