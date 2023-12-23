def dfs(visited, graph, node):
  if node not in visited:
    print(node)
    visited.add(node)
    for n in graph[node]:
      dfs(visited,graph,n)
      
graph = {
  '5' : ['3','7'],
  '3' : ['2', '4'],
  '7' : ['8'],
  '2' : [],
  '4' : ['8'],
  '8' : []
}

visited = set()
print("")
print("Depth-First Search Result, starting from vertex 1:-")

dfs(visited, graph, '5')


