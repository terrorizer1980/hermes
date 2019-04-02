// RUN: %hermes -O %s | %FileCheck --match-full-lines %s
// RUN: %hermes -O -emit-binary -out %t.hbc %s && %hermes %t.hbc | %FileCheck --match-full-lines %s

// Ensure that eval() generates correct error locations.

print("START");
//CHECK: START

var global = Function("return this")();

try{ global.eval(" )"); } catch (e) {
    print(e.message);
}
//CHECK-NEXT: 1:2:invalid expression
