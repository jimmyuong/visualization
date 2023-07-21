<template>
    <div ref="tablebox" class="tablebox" :style="{ width: tableboxsetting.width, height: tableboxsetting.height }">
        <table>
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Range (miles)</th>
                    <th>Charging Time (hours)</th>
                    <th>Price ($)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tesla</td>
                    <td>Model 3</td>
                    <td>300</td>
                    <td>8</td>
                    <td>40000</td>
                </tr>
                <!-- Add more rows here -->
                <!-- 50 rows of data -->

                <!-- Example: -->
                <tr>
                    <td>Nissan</td>
                    <td>Leaf</td>
                    <td>150</td>
                    <td>6</td>
                    <td>30000</td>
                </tr>
                <tr>
                    <td>Nissan</td>
                    <td>Leaf</td>
                    <td>150</td>
                    <td>6</td>
                    <td>30000</td>
                </tr>
                <tr>
                    <td>Nissan</td>
                    <td>Leaf</td>
                    <td>150</td>
                    <td>6</td>
                    <td>30000</td>
                </tr>
                <tr>
                    <td>Nissan</td>
                    <td>Leaf</td>
                    <td>150</td>
                    <td>6</td>
                    <td>30000</td>
                </tr>
                <tr>
                    <td>Nissan</td>
                    <td>Leaf</td>
                    <td>150</td>
                    <td>6</td>
                    <td>30000</td>
                </tr>
                <tr>
                    <td>Nissan</td>
                    <td>Leaf</td>
                    <td>150</td>
                    <td>6</td>
                    <td>30000</td>
                </tr>
                <tr>
                    <td>Nissan</td>
                    <td>Leaf</td>
                    <td>150</td>
                    <td>6</td>
                    <td>30000</td>
                </tr>
                <tr>
                    <td>Nissan</td>
                    <td>Leaf</td>
                    <td>150</td>
                    <td>6</td>
                    <td>30000</td>
                </tr>
                <tr>
                    <td>Nissan</td>
                    <td>Leaf</td>
                    <td>150</td>
                    <td>6</td>
                    <td>30000</td>
                </tr>
                <tr>
                    <td>Nissan</td>
                    <td>Leaf</td>
                    <td>150</td>
                    <td>6</td>
                    <td>30000</td>
                </tr>
                <tr v-for="n in 100" :key="n">
                    <td>Nissan{{ n }}</td>
                    <td>Leaf</td>
                    <td>150</td>
                    <td>6</td>
                    <td>30000</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }

    },
    props: {
        tableboxsetting: {
            type: Object,
            default: () => ({}), // Provide an empty object as the default value
        },
    },
    mounted() {
        this.splitPixel();
        console.log(this.tableboxsetting)
        console.log("aksdjflasjflajsfladjsfljasflkajsdlfjalksdjf")
    },
    methods: {
        splitPixel() {
            const positionValue = this.tableboxsetting?.positionValue || 'default value';
            const pix = positionValue.split(','); // Split based on comma
            this.$refs.tablebox.style.top = pix[0] + "px"
            this.$refs.tablebox.style.left = pix[1] + "px"
            console.log("table:" + pix)
        }
    },
}
</script>
<style lang="scss">
::-webkit-scrollbar{
    background-color: transparent;
    width: 8px;
}
::-webkit-scrollbar-thumb {
    background-color:#06868D;
}


.tablebox{
    position: absolute;
    overflow-y: auto;
}

table {
    color: #009A9F;
        width: 100%;
        //table-layout: fixed;
        thead{
            //position:sticky;
            color:#00F7FF;
        }
        tbody {

            height: calc(3rem * 11);
        }

        th {
            height: 3rem;
            line-height: 3rem;
            border-top: 1px solid #006B6F;

        }

        tr {
            transition: all .3s ease-in-out;

            td {
                height: 3rem;
                line-height: 3rem;
                border-top: 1px solid #006B6F;
            }

            &:last-child {
                td {
                    border-bottom: 1px solid #006B6F;
                }
            }

            &:first-child(1){
                background:#011E1F;
            }

            &:nth-child(2n-1) {
                background: rgba(0, 53, 55, 0.3);
            }

            &:hover {
                background: rgb(0, 115, 119, .3);
            }
        }
    }
</style>