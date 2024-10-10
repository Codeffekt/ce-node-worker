import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default {
    input: 'src/worker.ts',
    output: [
        {
            file: 'ce-node-worker.cjs',
            format: 'cjs',
            name: 'ce-node-worker'            
        }
    ],
    plugins: [
        typescript({ tsconfig: './tsconfig.json'}),
        nodeResolve()
    ]
}