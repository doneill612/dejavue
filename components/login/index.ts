export { default as FloatingSloc } from '@/components/login/FloatingSloc.vue'

export const slocSnippets = [
  'result = [f(x) for x in data if x > threshold]',
  'with open("log.txt") as f: lines = f.readlines()',
  'lambda_handler = lambda e, c: {"status": 200}',
  'go func() { ch <- compute(x) }()',
  'if err := json.Unmarshal(b, &v); err != nil { log.Fatal(err) }',
  'defer wg.Done()',
  'var grouped = items.GroupBy(i => i.Category);',
  'async Task<string> FetchAsync() => await client.GetStringAsync(uri);',
  'using var stream = File.OpenRead(path);',
  'std::unique_ptr<Node> node = std::make_unique<Node>();',
  'for (auto& [key, value] : myMap) { ... }',
  'constexpr int max = 1024;',
  'let result: Vec<_> = items.iter().map(|x| x * 2).collect();',
  'if let Some(val) = cache.get(&key) { return val; }',
  'type User = { id: string; name?: string }',
  'const grouped = data.reduce((acc, item) => { ... }, {})',
  'stream.filter(e -> e.isActive()).collect(Collectors.toList());',
  'try (var reader = new FileReader(path)) { ... }',
]